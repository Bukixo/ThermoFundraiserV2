var app;
(function (app) {
    var crud;
    (function (crud) {
        var listAllThermostatComponent;
        (function (listAllThermostatComponent) {
            "use strict";
            var ListAllThermostatsController = /** @class */ (function () {
                function ListAllThermostatsController(listAllThermostatsService) {
                    this.listAllThermostatsService = listAllThermostatsService;
                }
                ListAllThermostatsController.prototype.$onInit = function () {
                    this.getThermostats();
                };
                ListAllThermostatsController.prototype.getThermostats = function () {
                    var _this = this;
                    this.listAllThermostatsService.getAllThermostats().then(function (data) {
                        _this.thermostats = data;
                        _this.calculateRemainingValue(_this.thermostats);
                    });
                };
                ListAllThermostatsController.prototype.calculateRemainingValue = function (thermo) {
                    console.log("thermostat", this.thermostats);
                    thermo.forEach(function (thermostat) {
                        var remainingValue = thermostat.capitalGoal - thermostat.currentCapital;
                        thermostat.remainingCapital = remainingValue;
                    });
                };
                ListAllThermostatsController.$inject = ["listAllThermostatsService"];
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
