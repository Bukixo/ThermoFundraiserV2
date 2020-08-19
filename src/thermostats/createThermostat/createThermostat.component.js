var app;
(function (app) {
    var crud;
    (function (crud) {
        var createThermostatComponent;
        (function (createThermostatComponent) {
            "use strict";
            var CreateThermostatComponent = /** @class */ (function () {
                function CreateThermostatComponent() {
                    this.templateUrl = "src/thermostats/createThermostat/createThermostat.component.html";
                }
                return CreateThermostatComponent;
            }());
            angular.module("app.crud.createThermostatComponent").component("createThermostat", new CreateThermostatComponent());
        })(createThermostatComponent = crud.createThermostatComponent || (crud.createThermostatComponent = {}));
    })(crud = app.crud || (app.crud = {}));
})(app || (app = {}));
