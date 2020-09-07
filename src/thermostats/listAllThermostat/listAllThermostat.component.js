var app;
(function (app) {
    var crud;
    (function (crud) {
        var listAllThermostatComponent;
        (function (listAllThermostatComponent) {
            "use strict";
            var ListAllThermostatsController = /** @class */ (function () {
                function ListAllThermostatsController() {
                }
                ;
                ListAllThermostatsController.prototype.getThermostats = function () {
                    this.thermostats = [
                        {
                            "thermostatId": 1,
                            "imageUrl": "https://i.pinimg.com/564x/56/f7/0a/56f70aca3170062c6f5e22d834c3f3fd.jpg",
                            "name": "nigeria",
                            "deadline": new Date(2021, 10, 20),
                            "creationDate": new Date().toLocaleDateString(),
                            "capitalGoal": 2000,
                            "currentCapital": 50,
                            "remainingCapital": this.calculateRemainingCapital("capitalGoal", "currentCpital")
                        }
                        // {
                        //     "thermostatId" : 2,
                        //     "imageUrl": "https://i.pinimg.com/564x/8e/74/f3/8e74f3b2ae463bd38b356a81c089b44c.jpg",
                        //     "name" : "teeth whitening",
                        //     "deadline" : new Date(2020, 12, 20),
                        //     "creationDate": new Date().toLocaleDateString(),
                        //     "capitalGoal": 500,
                        //     "currentCapital": 35,
                        //     "remainingCapital": this.calculateRemainingCapital("capitalGoal", "currentCpital")
                        // },
                        // {
                        //     "thermostatId" : 2,
                        //     "imageUrl": "https://i.pinimg.com/564x/34/11/c1/3411c1149a31de5d2c7d45547dabf35f.jpg",
                        //     "name" : "YSL Bag",
                        //     "deadline" : new Date(2020, 12, 20),
                        //     "creationDate": new Date().toLocaleDateString(),
                        //     "capitalGoal": 500,
                        //     "currentCapital": 35,
                        //     "remainingCapital": this.calculateRemainingCapital("capitalGoal", "currentCpital")
                        // }
                    ];
                };
                ListAllThermostatsController.prototype.calculateRemainingCapital = function (capitalGoal, currentCapital) {
                    return this.remainingCapital = capitalGoal - currentCapital;
                };
                ListAllThermostatsController.prototype.$onInit = function () {
                    this.getThermostats();
                    console.log("thermostat", this.thermostats);
                };
                return ListAllThermostatsController;
            }());
            var ListAllThermostatsComponent = /** @class */ (function () {
                function ListAllThermostatsComponent() {
                    this.templateUrl = "src/thermostats/listAllThermostat/listAllThermostat.component.html";
                    this.controller = ListAllThermostatsController;
                }
                return ListAllThermostatsComponent;
            }());
            angular.module("app.crud.listAllThermostatsComponent").component("listAllThermostats", new ListAllThermostatsComponent());
        })(listAllThermostatComponent = crud.listAllThermostatComponent || (crud.listAllThermostatComponent = {}));
    })(crud = app.crud || (app.crud = {}));
})(app || (app = {}));
