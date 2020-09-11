var app;
(function (app) {
    var services;
    (function (services) {
        "use strict";
        var DataService = /** @class */ (function () {
            // public apiUrl: string;
            function DataService($http, $q) {
                var _this = this;
                this.$http = $http;
                this.$q = $q;
                this.fail = function (error) {
                    var msg = error.data ? error.data.Message : "Repository operation failed";
                    var reason = "operation failed";
                    console.log(msg, reason);
                    return _this.$q.reject(msg);
                };
                this.success = function (response) {
                    console.log("response", response.data);
                    return response.data;
                };
            }
            DataService.prototype.getAllThermos = function () {
                return this.$http({
                    method: "GET",
                    url: "https://my-json-server.typicode.com/Bukixo/thermostats/thermostats"
                })
                    .then(this.success)
                    .catch(this.fail);
            };
            DataService.inject = ["$http", "q"];
            return DataService;
        }());
        services.DataService = DataService;
        angular
            .module("app.services")
            .service("dataService", DataService);
    })(services = app.services || (app.services = {}));
})(app || (app = {}));
