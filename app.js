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
            url: '/thermostat',
            component: "getThermostat"
        };
        var editState = {
            name: 'edit',
            url: '/edit',
            component: "updateThermostat"
        };
        var deleteState = {
            name: 'delete',
            url: '/delete',
            component: "deleteThermostat"
        };
        var createState = {
            name: 'create',
            url: '/create',
            component: "createThermostat"
        };
        $stateProvider.state(homeState);
        $stateProvider.state(dashboardState);
        $stateProvider.state(editState);
        $stateProvider.state(deleteState);
        $stateProvider.state(createState);
    });
})(app || (app = {}));
