/**
 * Created by Manfred on 3/17/2015.
 */

module com.ec.jobsity.angularchallange.services {
    import AbstractModel = com.ec.jobsity.angularchallange.domain.AbstractModel
    import IndexingService = com.ec.jobsity.angularchallange.services.IndexingService
    import Service = xybrid.ui.Service

    interface MappingDefinition {
        [key: string]: string
    }

    @Service('StorageService')
    export class StorageService {

        private indexingService

        constructor(IndexingService: IndexingService) {
            this.indexingService = IndexingService
        }

        getLazy<T extends AbstractModel>(id: string) : T {
            return <T>amplify.store(id)
        }
        getAllLazy<T extends AbstractModel> (type: string) : T[] {
            var stored = <AbstractModel[]>amplify.store()
            var typeElements = []

            var element
            for(var key in stored) {
                element = amplify.store(key)
                if(type && element.type == type) {
                    typeElements.push(element)
                }
            }
            return typeElements
        }

        get(id: string) {
            var element = this.getLazy(id)

            this.resolveMapping(element, element.type)

            return element
        }
        getAll<T extends AbstractModel>(type: string) : T[] {
            var elements = this.getAllLazy(type)

            if(elements.length > 0) {
                elements.forEach((element: AbstractModel) => {
                    this.resolveMapping(element, type)
                })
            }
            return <T[]> elements
        }
        remove(id: string) {
            var model = amplify.store(id)
            this.indexingService.deleteIndexFor(this.get(model.id))
            amplify.store(id, null)

        }
        save(model: AbstractModel) : string {
            model.id = chance.guid()
            amplify.store(model.id, model)
            this.indexingService.createIndexFor(this.get(model.id))
            return model.id
        }
        update(model: AbstractModel) : string {
            amplify.store(model.id, null)
            amplify.store(model.id, model)
            this.indexingService.updateIndexFor(this.get(model.id))
            return model.id
        }
        saveOrUpdate(model: AbstractModel): string {
            if(model.id)
                return this.update(model)

            return this.save(model)
        }

        private resolveMapping(element, type) {
            this.resolveHasMany(element, type)

            this.resolveHasOne(element, type)

            this.resolveInversedBy(element, type)
        }
        private resolveHasOne(element: AbstractModel, type: string) {
            var Type = com.ec.jobsity.angularchallange.domain[type]

            var hasOneDef: MappingDefinition = Type['hasOne']

            if(hasOneDef) {
                for(var field in hasOneDef) {
                    this.resolveField(element, field, hasOneDef[field])
                }
            }
        }
        private resolveHasMany(element: AbstractModel, type: string) {
            var Type = com.ec.jobsity.angularchallange.domain[type]

            var hasManyDef: MappingDefinition = Type['hasMany']

            for(var field in hasManyDef) {
                this.resolveField(element, field, hasManyDef[field])
            }
        }
        private resolveInversedBy(element: AbstractModel, type: string) {
            var Type = com.ec.jobsity.angularchallange.domain[type]

            var inversedByDef: MappingDefinition = Type['inversedBy']


            if(inversedByDef) {
                var inversedFieldReference, inversedTypeReference, inversedByExpression;

                for(var field in inversedByDef) {

                    inversedByExpression = inversedByDef[field].split('.')
                    if(inversedByExpression.length < 2)
                        throw Error()
                    inversedTypeReference = inversedByExpression[0]
                    inversedFieldReference = inversedByExpression[1]

                    element[field] = this.resolveInversedField(element.id, inversedTypeReference, inversedFieldReference)

                }
            }
        }
        private resolveInversedField(id: string, inversedTypeReference: string, inversedFieldReference: string) {

            var resolvedValues = []

            var InversedType = com.ec.jobsity.angularchallange.domain[inversedTypeReference]

            if(!InversedType) {
                throw Error()
            }

            var allInversedElements = this.getAllLazy(inversedTypeReference)

            if(allInversedElements && allInversedElements.length > 0) {
                allInversedElements.forEach((element) => {
                    if(angular.isArray(element[inversedFieldReference])) {
                        if(element[inversedFieldReference].indexOf(id) != -1) {
                            resolvedValues.push(element)
                        }
                    }
                    else {
                        if(element[inversedFieldReference] == id) {
                            resolvedValues.push(element)
                        }
                    }
                })
            }

            return resolvedValues
        }
        private resolveField(element: AbstractModel, field: string, type: string) {
            if(angular.isArray(element[field]))
                element[field] = this.resolveIndexArray(element[field], type)
            else
                element[field] = this.resolveIndex(element[field], type)
        }
        private resolveIndex(fieldValue, type: string) {
            var Type = com.ec.jobsity.angularchallange.domain[type] //TODO: Improve

            if(angular.isFunction(Type)) {
                return this.getLazy(fieldValue)

            }

            if(this.isEnum(Type)) {
                return Type[fieldValue]
            }

        }
        private resolveIndexArray(fieldValue, type: string) {
            var indexes = fieldValue

            for(var i = 0; i < indexes.length; i++) {
                indexes[i] = this.resolveIndex(indexes[i], type)
            }

            return indexes

        }
        private isEnum(Type): boolean {
            return true //TODO: Create
        }

    }

}
