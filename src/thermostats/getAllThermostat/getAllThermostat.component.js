var app;
(function (app) {
    var crud;
    (function (crud) {
        var getAllThermostatComponent;
        (function (getAllThermostatComponent) {
            var GetAllThermostats = /** @class */ (function () {
                function GetAllThermostats() {
                    this.templateUrl = "src/thermostats/getAllThermostat/getAllThermostat.component.html";
                }
                return GetAllThermostats;
            }());
            angular.module("app.crud.getAllThermostatsComponent").component("getAllThermostats", new GetAllThermostats());
        })(getAllThermostatComponent = crud.getAllThermostatComponent || (crud.getAllThermostatComponent = {}));
    })(crud = app.crud || (app.crud = {}));
})(app || (app = {}));
