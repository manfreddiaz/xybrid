/**
 * Created by Manfred on 3/16/2015.
 */

module com.ec.jobsity.angularchallange.domain {
    import Movie = com.ec.jobsity.angularchallange.domain.Movie
    import Model = xybrid.ui.Model

    @Model
    export class Person extends AbstractModel {
        firstName: string
        lastName: string
        gender: Gender
        birthdate: Date
        actedMovies: Movie[]
        directedMovies: Movie[]

        static hasOne = {
            gender: 'Gender'
        }
        static inversedBy = {
            actedMovies: 'Movie.cast',
            directedMovies: 'Movie.directors'
        }

        constructor() {
            super('Person')
        }
    }

    export enum Gender {
        Male,
        Female
    }
}
