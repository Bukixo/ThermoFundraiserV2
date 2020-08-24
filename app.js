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
            //     name: 'course',
            //     url: '/course/{courseId}',
            //     resolve: {
            //         courseId: function ($stateParams) {
            //             return $stateParams.courseId;
            //         }
            //     },
            //     template: '<course course-id="$resolve.courseId"></course>'
            // },
            {
                name: 'dashboard.thermostat',
                url: '/{thermostatId}',
                component: "getThermostat",
                resolve: {
                    thermostat: function ($transition$) {
                        return $transition$.params().thermostatId;
                    }
                }
            }
        ];
        state.forEach(function (state) {
            $stateProvider.state(state);
        });
    });
})(app || (app = {}));
