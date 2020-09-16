var app;
(function (app) {
    var home;
    (function (home) {
        "use strict";
        var HomeComponent = /** @class */ (function () {
            function HomeComponent() {
                this.templateUrl = "src/home/home.component.html";
            }
            return HomeComponent;
        }());
        angular.module("app.home").component("homeComponent", new HomeComponent());
    })(home = app.home || (app.home = {}));
})(app || (app = {}));
