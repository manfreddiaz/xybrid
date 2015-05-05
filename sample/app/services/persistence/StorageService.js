/**
 * Created by Manfred on 3/17/2015.
 */
var com;
(function (com) {
    var ec;
    (function (ec) {
        var jobsity;
        (function (jobsity) {
            var angularchallange;
            (function (angularchallange) {
                var services;
                (function (services) {
                    var Service = xybrid.ui.Service;
                    var StorageService = (function () {
                        function StorageService(IndexingService) {
                            this.indexingService = IndexingService;
                        }
                        StorageService.prototype.getLazy = function (id) {
                            return amplify.store(id);
                        };
                        StorageService.prototype.getAllLazy = function (type) {
                            var stored = amplify.store();
                            var typeElements = [];
                            var element;
                            for (var key in stored) {
                                element = amplify.store(key);
                                if (type && element.type == type) {
                                    typeElements.push(element);
                                }
                            }
                            return typeElements;
                        };
                        StorageService.prototype.get = function (id) {
                            var element = this.getLazy(id);
                            this.resolveMapping(element, element.type);
                            return element;
                        };
                        StorageService.prototype.getAll = function (type) {
                            var _this = this;
                            var elements = this.getAllLazy(type);
                            if (elements.length > 0) {
                                elements.forEach(function (element) {
                                    _this.resolveMapping(element, type);
                                });
                            }
                            return elements;
                        };
                        StorageService.prototype.remove = function (id) {
                            var model = amplify.store(id);
                            this.indexingService.deleteIndexFor(this.get(model.id));
                            amplify.store(id, null);
                        };
                        StorageService.prototype.save = function (model) {
                            model.id = chance.guid();
                            amplify.store(model.id, model);
                            this.indexingService.createIndexFor(this.get(model.id));
                            return model.id;
                        };
                        StorageService.prototype.update = function (model) {
                            amplify.store(model.id, null);
                            amplify.store(model.id, model);
                            this.indexingService.updateIndexFor(this.get(model.id));
                            return model.id;
                        };
                        StorageService.prototype.saveOrUpdate = function (model) {
                            if (model.id)
                                return this.update(model);
                            return this.save(model);
                        };
                        StorageService.prototype.resolveMapping = function (element, type) {
                            this.resolveHasMany(element, type);
                            this.resolveHasOne(element, type);
                            this.resolveInversedBy(element, type);
                        };
                        StorageService.prototype.resolveHasOne = function (element, type) {
                            var Type = com.ec.jobsity.angularchallange.domain[type];
                            var hasOneDef = Type['hasOne'];
                            if (hasOneDef) {
                                for (var field in hasOneDef) {
                                    this.resolveField(element, field, hasOneDef[field]);
                                }
                            }
                        };
                        StorageService.prototype.resolveHasMany = function (element, type) {
                            var Type = com.ec.jobsity.angularchallange.domain[type];
                            var hasManyDef = Type['hasMany'];
                            for (var field in hasManyDef) {
                                this.resolveField(element, field, hasManyDef[field]);
                            }
                        };
                        StorageService.prototype.resolveInversedBy = function (element, type) {
                            var Type = com.ec.jobsity.angularchallange.domain[type];
                            var inversedByDef = Type['inversedBy'];
                            if (inversedByDef) {
                                var inversedFieldReference, inversedTypeReference, inversedByExpression;
                                for (var field in inversedByDef) {
                                    inversedByExpression = inversedByDef[field].split('.');
                                    if (inversedByExpression.length < 2)
                                        throw Error();
                                    inversedTypeReference = inversedByExpression[0];
                                    inversedFieldReference = inversedByExpression[1];
                                    element[field] = this.resolveInversedField(element.id, inversedTypeReference, inversedFieldReference);
                                }
                            }
                        };
                        StorageService.prototype.resolveInversedField = function (id, inversedTypeReference, inversedFieldReference) {
                            var resolvedValues = [];
                            var InversedType = com.ec.jobsity.angularchallange.domain[inversedTypeReference];
                            if (!InversedType) {
                                throw Error();
                            }
                            var allInversedElements = this.getAllLazy(inversedTypeReference);
                            if (allInversedElements && allInversedElements.length > 0) {
                                allInversedElements.forEach(function (element) {
                                    if (angular.isArray(element[inversedFieldReference])) {
                                        if (element[inversedFieldReference].indexOf(id) != -1) {
                                            resolvedValues.push(element);
                                        }
                                    }
                                    else {
                                        if (element[inversedFieldReference] == id) {
                                            resolvedValues.push(element);
                                        }
                                    }
                                });
                            }
                            return resolvedValues;
                        };
                        StorageService.prototype.resolveField = function (element, field, type) {
                            if (angular.isArray(element[field]))
                                element[field] = this.resolveIndexArray(element[field], type);
                            else
                                element[field] = this.resolveIndex(element[field], type);
                        };
                        StorageService.prototype.resolveIndex = function (fieldValue, type) {
                            var Type = com.ec.jobsity.angularchallange.domain[type]; //TODO: Improve
                            if (angular.isFunction(Type)) {
                                return this.getLazy(fieldValue);
                            }
                            if (this.isEnum(Type)) {
                                return Type[fieldValue];
                            }
                        };
                        StorageService.prototype.resolveIndexArray = function (fieldValue, type) {
                            var indexes = fieldValue;
                            for (var i = 0; i < indexes.length; i++) {
                                indexes[i] = this.resolveIndex(indexes[i], type);
                            }
                            return indexes;
                        };
                        StorageService.prototype.isEnum = function (Type) {
                            return true; //TODO: Create
                        };
                        StorageService = Service('StorageService')(StorageService) || StorageService;
                        return StorageService;
                    })();
                    services.StorageService = StorageService;
                })(services = angularchallange.services || (angularchallange.services = {}));
            })(angularchallange = jobsity.angularchallange || (jobsity.angularchallange = {}));
        })(jobsity = ec.jobsity || (ec.jobsity = {}));
    })(ec = com.ec || (com.ec = {}));
})(com || (com = {}));
//# sourceMappingURL=StorageService.js.map