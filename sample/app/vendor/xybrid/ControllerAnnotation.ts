module xybrid.ui {
  export function Controller(name: string) {
      return (target: Function) => {
        var controllersModule : ng.IModule
        try {
            controllersModule = angular.module("com.ec.jobsity.angularchallange.controllers")
        }
        catch(error) {
            controllersModule = angular.module("com.ec.jobsity.angularchallange.controllers", [])
        }

        controllersModule.controller(name, target)
      }
  }
  class ControllerMixin {

  }
}
