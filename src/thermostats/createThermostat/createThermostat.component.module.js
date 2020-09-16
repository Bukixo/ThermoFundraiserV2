var app;
(function (app) {
    var crud;
    (function (crud) {
        var createThermostatComponent;
        (function (createThermostatComponent) {
            var appModule = angular.module("app.crud.createThermostatComponent", []);
            appModule.config(['$qProvider', function ($qProvider) {
                    $qProvider.errorOnUnhandledRejections(false);
                }]);
        })(createThermostatComponent = crud.createThermostatComponent || (crud.createThermostatComponent = {}));
    })(crud = app.crud || (app.crud = {}));
})(app || (app = {}));
