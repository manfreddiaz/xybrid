var com;
(function (com) {
    var ec;
    (function (ec) {
        var jobsity;
        (function (jobsity) {
            var angularchallange;
            (function (angularchallange) {
                var controllers;
                (function (controllers) {
                    var Gender = com.ec.jobsity.angularchallange.domain.Gender;
                    var Controller = xybrid.ui.Controller;
                    var ActorController = (function () {
                        function ActorController(StorageService, EnumService, NotificationService, $location, actor) {
                            this.dateOptions = new DatePickerOptions();
                            this.actor = actor;
                            this.enumService = EnumService;
                            this.storageService = StorageService;
                            this.notificationService = NotificationService;
                            this.angularLocationService = $location;
                            this.init();
                        }
                        ActorController.prototype.create = function () {
                            if (this.actorForm.$valid) {
                                this.storageService.saveOrUpdate(this.actor);
                                this.angularLocationService.path('/actors');
                            }
                            else {
                                this.notificationService.error('Error', 'There are some errors on your form');
                            }
                        };
                        ActorController.prototype.delete = function () {
                            if ((this.actor.actedMovies && this.actor.actedMovies.length > 0) || (this.actor.directedMovies && this.actor.directedMovies.length > 0)) {
                                this.notificationService.error('Forbidden', 'Cannot remove this person if it has associated movies. Remove it from theere first.');
                            }
                            else {
                                this.storageService.remove(this.actor.id);
                                this.angularLocationService.path('/actors');
                            }
                        };
                        ActorController.prototype.init = function () {
                            this.genders = this.enumService.getDisplayForEnum(Gender);
                        };
                        ActorController = Controller('ActorController')(ActorController) || ActorController;
                        return ActorController;
                    })();
                    controllers.ActorController = ActorController;
                    var DatePickerOptions = (function () {
                        function DatePickerOptions() {
                            this.changeYear = true;
                            this.changeMonth = true;
                            this.yearRange = '1900:-0';
                        }
                        return DatePickerOptions;
                    })();
                })(controllers = angularchallange.controllers || (angularchallange.controllers = {}));
            })(angularchallange = jobsity.angularchallange || (jobsity.angularchallange = {}));
        })(jobsity = ec.jobsity || (ec.jobsity = {}));
    })(ec = com.ec || (com.ec = {}));
})(com || (com = {}));
//# sourceMappingURL=ActorController.js.map