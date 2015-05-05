module xybrid.ui {
  export function Service(name: string) {
    return (target: Function) => {
      var serviceModule: ng.IModule

      try {
        serviceModule = angular.module("com.ec.jobsity.angularchallange.services")
      }
      catch(error) {
        serviceModule = angular.module("com.ec.jobsity.angularchallange.services", [])
      }
      serviceModule.service(name, target)
    }

  }
  export function Transactional(target: Function, member: string, value: any) {

  }
  class ServiceMixin {

  }
}
