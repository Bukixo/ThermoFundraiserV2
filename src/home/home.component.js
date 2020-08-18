var app;
(function (app) {
    var home;
    (function (home) {
        var HomeComponent = /** @class */ (function () {
            function HomeComponent() {
                this.templateUrl = "src/home/home.component.html";
            }
            return HomeComponent;
        }());
        angular.module("App").component("homeComponent", new HomeComponent());
    })(home = app.home || (app.home = {}));
})(app || (app = {}));
