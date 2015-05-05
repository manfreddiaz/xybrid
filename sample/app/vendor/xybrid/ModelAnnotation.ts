module xybrid.ui {
  export function Model(target: Function) {
    var domainModule: ng.IModule
    try {
      domainModule = angular.module("com.ec.jobsity.angularchallange.model")
    }
    catch(error) {
      domainModule = angular.module("com.ec.jobsity.angularchallange.model", [])
    }
    domainModule.value(target)
  }
  class ModelMixin {

  }
}
