var app;
(function (app) {
    "use strict";
    var appModule = angular.module("App", [
        "app.home",
        "app.navbar",
        "app.footer",
        "app.crud",
        "ui.router"
    ]);
    appModule.config(function ($stateProvider) {
        var homeState = {
            name: 'home',
            url: '/home',
            component: "getAllThermostats"
        };
        var dashboardState = {
            name: 'dashboard',
            url: '/dashboard',
            component: "getThermostat"
        };
        $stateProvider.state(homeState);
        $stateProvider.state(dashboardState);
    });
})(app || (app = {}));
