var app;
(function (app) {
    "use strict";
    angular.module("App", [
        "app.home",
        "app.navbar",
        "app.footer",
        "app.crud",
        "app.modal"
    ]);
})(app || (app = {}));
