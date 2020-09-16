var app;
(function (app) {
    var crud;
    (function (crud) {
        angular.module("app.crud", [
            "app.crud.createThermostatComponent",
            "app.crud.deleteThermostatComponent",
            "app.crud.updateThermostatComponent",
            "app.crud.getThermostatComponent",
            "app.crud.listAllThermostatsComponent",
            "app.repositories"
        ]);
    })(crud = app.crud || (app.crud = {}));
})(app || (app = {}));
