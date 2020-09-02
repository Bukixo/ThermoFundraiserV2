var app;
(function (app) {
    var crud;
    (function (crud) {
        var getAllThermostatComponent;
        (function (getAllThermostatComponent) {
            var GetAllThermostatsController = /** @class */ (function () {
                function GetAllThermostatsController() {
                }
                GetAllThermostatsController.prototype.$onInit = function () {
                    this.thermostatId = "200";
                    console.log(this.thermostatId);
                };
                return GetAllThermostatsController;
            }());
            var GetAllThermostats = /** @class */ (function () {
                function GetAllThermostats() {
                    this.templateUrl = "src/thermostats/getAllThermostat/getAllThermostat.component.html";
                    this.controller = GetAllThermostatsController;
                }
                return GetAllThermostats;
            }());
            angular.module("app.crud.getAllThermostatsComponent").component("getAllThermostats", new GetAllThermostats());
        })(getAllThermostatComponent = crud.getAllThermostatComponent || (crud.getAllThermostatComponent = {}));
    })(crud = app.crud || (app.crud = {}));
})(app || (app = {}));
