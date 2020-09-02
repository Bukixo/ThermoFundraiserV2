namespace app {
    "use strict";

    var appModule = angular.module("App", [
        "app.home",
        "app.navbar",
        "app.footer",
        "app.crud",
        "ui.router"
    ])


    appModule.config(function ($stateProvider) {

        var state = [
            {
                name: 'home',
                url: '/',
                component: "getAllThermostats"
            },
            {
                name: 'dashboard',
                url: '/thermostat',
                component: "getThermostat"
            },
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
            // {
            //     name: 'dashboard',
            //     url: '/{thermostatId}',
            //     // component: "getThermostat",
            //     resolve: {
            //         thermostat: function ($transition$: any): any {
            //             return $transition$.params().thermostatId;
            //         },
            //     template: '<home thermostat-id="$resolve.thermostatId"></home>'
            //     }
            // },
            {
                name: 'getThermostat',
                url: '/thermostat/{thermostatId}',
                component: "getThermostat",
                resolve: {
                    thermostatId: function ($transition$: any): any {
                        return $transition$.params().thermostatId;
                    }
                }
            }
        ]

        state.forEach(state => {
            $stateProvider.state(state);
        });
    });



}
