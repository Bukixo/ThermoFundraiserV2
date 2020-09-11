var app;
(function (app) {
    "use strict";
    var appModule = angular.module("App", [
        "app.home",
        "app.navbar",
        "app.footer",
        "app.crud"
    ]);
})(app || (app = {}));
