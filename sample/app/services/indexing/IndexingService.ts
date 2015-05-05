/**
 * Created by Manfred on 3/20/2015.
 */

module com.ec.jobsity.angularchallange.services {

    import Movie = com.ec.jobsity.angularchallange.domain.Movie
    import Person = com.ec.jobsity.angularchallange.domain.Person
    import AbstractModel = com.ec.jobsity.angularchallange.domain.AbstractModel
    import Service = xybrid.ui.Service

    @Service('IndexingService')
    export class IndexingService {
        index: lunr.Index

        constructor() {
            this.index = lunr(LunrConfig)
        }

        search(term: string): string[] {
            var results = []

            var matches = this.index.search(term)

            var document
            matches.forEach((index: lunr.IIndexSearchResult) => {
                results.push(index.ref)
            })

            return results
        }
        searchSimilarMovies(id: string, comparers: string[]): {id: string; similarity: number}[] {
            var baseVector = this.index.documentVector(id)

            var comparersVectors = []
            var measures = []

            comparers.forEach((ref: string) => {
                comparersVectors.push({id: ref, vector: this.index.documentVector(ref)})
            })

            comparersVectors.forEach((comparer: {id: string; vector: lunr.Vector}) => {
                measures.push({id: comparer.id, similarity: comparer.vector.similarity(baseVector) })
            })

            return measures;
        }
        createIndexFor(model: AbstractModel) {
            switch (model.type) {
                case 'Movie':
                    this.index.add(this.createDocumentFromMovie(<Movie>model))
                    break;
                case 'Person':
                    this.index.add(this.createDocumentFromPerson(<Person>model))
                    break;
                default :
                    throw new Error()
            }
        }
        updateIndexFor(model: AbstractModel) {
            switch (model.type) {
                case 'Movie':
                    this.index.update(this.createDocumentFromMovie(<Movie>model))
                    break;
                case 'Person':
                    this.index.update(this.createDocumentFromPerson(<Person>model))
                    break;
                default :
                    throw new Error()
            }
        }
        deleteIndexFor(model: AbstractModel) {
            switch (model.type) {
                case 'Movie':
                    this.index.remove(this.createDocumentFromMovie(<Movie>model))
                    break;
                case 'Person':
                    this.index.remove(this.createDocumentFromPerson(<Person>model))
                    break;
                default :
                    throw new Error()
            }
        }
        private createDocumentFromMovie(movie: Movie) {
            return {
                id: movie.id,
                type: movie.type,
                name: movie.name,
                description: movie.description,
                additional: movie.cast.map((person: Person) => {
                    return person.firstName.concat(' ', person.lastName)
                }).join(' ')
            }
        }
        private createDocumentFromPerson(person: Person){
            return {
                id: person.id,
                type: person.type,
                name: person.firstName + ' ' +person.lastName,
                description: '',
                additional: ''
            }
        }
    }
    class LunrConfig extends lunr.Index {
        constructor() {
            super()
            this.ref('id')
            this.field('type')
            this.field('name')
            this.field('description')
            this.field('additional')
        }
    }
}
