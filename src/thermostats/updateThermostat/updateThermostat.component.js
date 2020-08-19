var app;
(function (app) {
    var crud;
    (function (crud) {
        var updateThermostatComponent;
        (function (updateThermostatComponent) {
            var UpdateThermostatComponent = /** @class */ (function () {
                function UpdateThermostatComponent() {
                    this.templateUrl = "src/thermostats/updateThermostat/updateThermostat.component.html";
                }
                return UpdateThermostatComponent;
            }());
            angular.module("app.crud.updateThermostatComponent").component("updateThermostat", new UpdateThermostatComponent());
        })(updateThermostatComponent = crud.updateThermostatComponent || (crud.updateThermostatComponent = {}));
    })(crud = app.crud || (app.crud = {}));
})(app || (app = {}));
