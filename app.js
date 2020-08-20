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
            //   templateUrl: "src/thermostats/getThermostat/getThermostat.component.html"
            template: "<h3>hello world!</h3>"
        };
        var dashboardState = {
            name: 'dashboard',
            url: '/dashboard',
            //   templateUrl: "src/thermostats/getThermostat/getThermostat.component.html"
            template: "<h3>hello dashboard!</h3>"
        };
        $stateProvider.state(homeState);
        $stateProvider.state(dashboardState);
    });
})(app || (app = {}));
