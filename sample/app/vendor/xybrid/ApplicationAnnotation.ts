module xybrid.ui {
  export function Application(namespace: string) {
    return (target: Function) => {
        var dependencies = []
        dependencies.push(createArtifactNamespaces(namespace))
        dependencies.push(createAnnotatedDependencies(target))

        angular.module(namespace, dependencies)
    }
  }
  function createArtifactNamespaces(namespace: string): string[] {
        return [namespace.concat('.controllers'), namespace.concat('.model'),
                namespace.concat('.services')]
  }
  function createAnnotatedDependencies(target: Function) : string[] {
      return target.__dependencies;
  }
}
