var app;
(function (app) {
    var crud;
    (function (crud) {
        var deleteThermostatComponent;
        (function (deleteThermostatComponent) {
            var DeleteThermostatComponent = /** @class */ (function () {
                function DeleteThermostatComponent() {
                    this.templateUrl = "src/thermostats/deleteThermostat/deleteThermostat.component.html";
                }
                return DeleteThermostatComponent;
            }());
            angular.module("app.crud.deleteThermostatComponent").component("deleteThermostat", new DeleteThermostatComponent());
        })(deleteThermostatComponent = crud.deleteThermostatComponent || (crud.deleteThermostatComponent = {}));
    })(crud = app.crud || (app.crud = {}));
})(app || (app = {}));
