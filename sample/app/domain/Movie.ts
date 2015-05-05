/**
 * Created by Manfred on 3/16/2015.
 */
module com.ec.jobsity.angularchallange.domain {
    import Person = com.ec.jobsity.angularchallange.domain.Person
    import Model = xybrid.ui.Model
    @Model
    export class Movie extends AbstractModel {
        name: string;
        releaseYear: number;
        grossIncome: number;
        cast: Person[]
        directors: Person[]
        rating: number
        genres: Genre[]
        description: string
        image: string //base64 encoded
        similarMovies: Movie[]

        static hasMany = {
            cast: 'Person',
            directors: 'Person',
            genres: 'Genre'
        }

        constructor() {
            super('Movie')
            this.directors = []
            this.cast = []
            this.similarMovies = []
        }
    }
}
