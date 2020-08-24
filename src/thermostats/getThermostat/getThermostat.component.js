var app;
(function (app) {
    var crud;
    (function (crud) {
        var getThermostatComponent;
        (function (getThermostatComponent) {
            var GetThermostatController = /** @class */ (function () {
                function GetThermostatController() {
                }
                GetThermostatController.prototype.$onInit = function () {
                    this.thermostatId = "200";
                    console.log("test");
                };
                return GetThermostatController;
            }());
            var GetThermostat = /** @class */ (function () {
                function GetThermostat() {
                    this.controller = GetThermostatController;
                    this.templateUrl = "src/thermostats/getThermostat/getThermostat.component.html";
                    this.bindings = {
                        thermostat: '<'
                    };
                }
                return GetThermostat;
            }());
            angular.module("app.crud.getThermostatComponent").component("getThermostat", new GetThermostat());
        })(getThermostatComponent = crud.getThermostatComponent || (crud.getThermostatComponent = {}));
    })(crud = app.crud || (app.crud = {}));
})(app || (app = {}));
