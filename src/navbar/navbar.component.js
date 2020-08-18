var app;
(function (app) {
    var nav;
    (function (nav) {
        var NavbarComponent = /** @class */ (function () {
            function NavbarComponent() {
                this.templateUrl = "src/navbar/navbar.component.html";
            }
            return NavbarComponent;
        }());
        angular.module("App").component("navbarComponent", new NavbarComponent());
    })(nav = app.nav || (app.nav = {}));
})(app || (app = {}));
