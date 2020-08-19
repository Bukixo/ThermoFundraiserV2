var app;
(function (app) {
    var crud;
    (function (crud) {
        var getThermostatComponent;
        (function (getThermostatComponent) {
            var GetThermostat = /** @class */ (function () {
                function GetThermostat() {
                    this.templateUrl = "src/thermostats/getThermostat/getThermostat.component.html";
                }
                return GetThermostat;
            }());
            angular.module("app.crud.getThermostatComponent").component("getThermostat", new GetThermostat());
        })(getThermostatComponent = crud.getThermostatComponent || (crud.getThermostatComponent = {}));
    })(crud = app.crud || (app.crud = {}));
})(app || (app = {}));
