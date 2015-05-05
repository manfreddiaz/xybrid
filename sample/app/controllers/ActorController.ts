module com.ec.jobsity.angularchallange.controllers {

    import Person = com.ec.jobsity.angularchallange.domain.Person
    import StorageService = com.ec.jobsity.angularchallange.services.StorageService;
    import EnumService = com.ec.jobsity.angularchallange.services.EnumService;
    import Gender = com.ec.jobsity.angularchallange.domain.Gender
    import Controller = xybrid.ui.Controller;
    import NotificationService = com.ec.jobsity.angularchallange.services.NotificationService

    @Controller('ActorController')
    export class ActorController {
        actor: Person;
        actorForm: ng.IFormController;
        genders: any
        dateOptions: DatePickerOptions;

        private storageService: StorageService;
        private angularLocationService: ng.ILocationService
        private enumService : EnumService
        private notificationService: any

        constructor(StorageService: StorageService, EnumService: EnumService,   NotificationService: NotificationService,
                    $location: ng.ILocationService, actor: Person) {
            this.dateOptions = new DatePickerOptions()
            this.actor = actor;
            this.enumService = EnumService
            this.storageService = StorageService
            this.notificationService = NotificationService;
            this.angularLocationService = $location;
            this.init()
        }
        create() {
            if(this.actorForm.$valid) {
                this.storageService.saveOrUpdate(this.actor);
                this.angularLocationService.path('/actors')
            }
            else {
                this.notificationService.error('Error', 'There are some errors on your form')
            }
        }
        delete() {
            if((this.actor.actedMovies && this.actor.actedMovies.length > 0) || (this.actor.directedMovies && this.actor.directedMovies.length > 0)) {
                this.notificationService.error('Forbidden', 'Cannot remove this person if it has associated movies. Remove it from theere first.')
            }
            else {
                this.storageService.remove(this.actor.id)
                this.angularLocationService.path('/actors')
            }
        }
        init() {
            this.genders = this.enumService.getDisplayForEnum(Gender)
        }
    }

    class DatePickerOptions {
        changeYear: boolean
        changeMonth: boolean
        yearRange: string

        constructor() {
            this.changeYear = true
            this.changeMonth = true
            this.yearRange = '1900:-0'
        }
    }
}
