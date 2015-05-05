module xybrid.ui {

  export function DependsOn(name: string) {
      return (target: Function) => {
         if(target.__dependencies)
          target.__dependencies = []

         target.__dependencies.push(name)
      }
  }
}
interface Function {
  __dependencies?: Array<string>
}
