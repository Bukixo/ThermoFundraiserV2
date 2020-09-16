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
        var state = [
            {
                name: 'home',
                url: '/',
                component: "listAllThermostats"
            },
            // {
            //     name: 'dashboard',
            //     url: '/thermostat',
            //     component: "getThermostat"
            // },
            {
                name: 'edit',
                url: '/edit',
                component: "updateThermostat"
            },
            {
                name: 'delete',
                url: '/delete',
                component: "deleteThermostat"
            },
            {
                name: 'create',
                url: '/create',
                component: "createThermostat"
            },
        ];
        state.forEach(function (state) {
            $stateProvider.state(state);
        });
    });
})(app || (app = {}));
