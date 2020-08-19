var app;
(function (app) {
    var footer;
    (function (footer) {
        var FooterComponent = /** @class */ (function () {
            function FooterComponent() {
                this.templateUrl = "src/footer/footer.component.html";
            }
            return FooterComponent;
        }());
        angular.module("app.footer").component("footerComponent", new FooterComponent());
    })(footer = app.footer || (app.footer = {}));
})(app || (app = {}));
