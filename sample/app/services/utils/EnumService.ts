/**
 * Created by Manfred on 3/19/2015.
 */

module com.ec.jobsity.angularchallange.services {
    import Service = xybrid.ui.Service

    @Service('EnumService')
    export class EnumService {

        getDisplayForEnum(Type): EnumDisplayFormat[]  {
            var display:EnumDisplayFormat[] = []

            var length = Object.keys(Type).length / 2

            for(var i=0; i < length; i++) {
                display.push({
                    value: i,
                    label: Type[i]
                })
            }

            return display
        }
    }
    interface EnumDisplayFormat {
        label: string;
        value: any;
    }
}
