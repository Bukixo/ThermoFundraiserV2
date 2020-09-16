namespace app.crud.createThermostatComponent {
    
    var appModule = angular.module("app.crud.createThermostatComponent", [])
    appModule.config(['$qProvider', function ($qProvider) {
        $qProvider.errorOnUnhandledRejections(false);
    }]);
}