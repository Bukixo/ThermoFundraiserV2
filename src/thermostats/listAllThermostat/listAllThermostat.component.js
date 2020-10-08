var app;
(function (app) {
    var crud;
    (function (crud) {
        var listAllThermostatComponent;
        (function (listAllThermostatComponent) {
            "use strict";
            var ListAllThermostatsController = /** @class */ (function () {
                // public apiUrl: string;
                function ListAllThermostatsController($http, $q) {
                    var _this = this;
                    this.$http = $http;
                    this.$q = $q;
                    this.fail = function (error) {
                        var msg = error.data ? error.data.Message : "Repository operation failed";
                        var reason = "operation failed";
                        console.log(msg, reason);
                        return _this.$q.reject(msg);
                    };
                    this.success = function (response) {
                        console.log("response", response.data);
                        // return response.data;
                        _this.thermostats = response.data;
                        _this.calculateRemainingValue(_this.thermostats);
                    };
                }
                ListAllThermostatsController.prototype.getAllThermos = function () {
                    return this.$http({
                        method: "GET",
                        url: "https://my-json-server.typicode.com/Bukixo/thermostats/thermostats"
                    })
                        .then(this.success)
                        .catch(this.fail);
                };
                ListAllThermostatsController.prototype.$onInit = function () {
                    this.getAllThermos();
                };
                // public getThermostats(): void {
                //     this.dataService.getAllThermos().then((data) => {
                //         this.thermostats = data;
                //         this.calculateRemainingValue(this.thermostats);
                //     })
                // }
                ListAllThermostatsController.prototype.calculateRemainingValue = function (thermo) {
                    console.log("thermostat", this.thermostats);
                    thermo.forEach(function (thermostat) {
                        var remainingValue = thermostat.capitalGoal - thermostat.currentCapital;
                        thermostat.remainingCapital = remainingValue;
                    });
                };
                // static $inject = ["dataService"];
                ListAllThermostatsController.inject = ["$http", "q"];
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
