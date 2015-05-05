/**
 * Created by Manfred on 3/16/2015.
 */
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var com;
(function (com) {
    var ec;
    (function (ec) {
        var jobsity;
        (function (jobsity) {
            var angularchallange;
            (function (angularchallange) {
                var domain;
                (function (domain) {
                    var Model = xybrid.ui.Model;
                    var Person = (function (_super) {
                        __extends(Person, _super);
                        function Person() {
                            _super.call(this, 'Person');
                        }
                        Person.hasOne = {
                            gender: 'Gender'
                        };
                        Person.inversedBy = {
                            actedMovies: 'Movie.cast',
                            directedMovies: 'Movie.directors'
                        };
                        Person = Model(Person) || Person;
                        return Person;
                    })(domain.AbstractModel);
                    domain.Person = Person;
                    (function (Gender) {
                        Gender[Gender["Male"] = 0] = "Male";
                        Gender[Gender["Female"] = 1] = "Female";
                    })(domain.Gender || (domain.Gender = {}));
                    var Gender = domain.Gender;
                })(domain = angularchallange.domain || (angularchallange.domain = {}));
            })(angularchallange = jobsity.angularchallange || (jobsity.angularchallange = {}));
        })(jobsity = ec.jobsity || (ec.jobsity = {}));
    })(ec = com.ec || (com.ec = {}));
})(com || (com = {}));
//# sourceMappingURL=Person.js.map