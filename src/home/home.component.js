var app;
(function (app) {
    var home;
    (function (home) {
        "use strict";
        var HomeController = /** @class */ (function () {
            function HomeController() {
            }
            HomeController.prototype.$onInit = function () {
                this.thermostatId = "200";
                console.log("test");
            };
            return HomeController;
        }());
        var HomeComponent = /** @class */ (function () {
            function HomeComponent() {
                this.bindings = '<';
                this.templateUrl = "src/home/home.component.html";
                this.controller = HomeController;
            }
            return HomeComponent;
        }());
        angular.module("app.home").component("homeComponent", new HomeComponent());
    })(home = app.home || (app.home = {}));
})(app || (app = {}));
