var app;
(function (app) {
    var repositories;
    (function (repositories) {
        "use strict";
        var DataAccessService = /** @class */ (function () {
            // public apiUrl: string;
            function DataAccessService(repositoryHelper) {
                this.repositoryHelper = repositoryHelper;
            }
            DataAccessService.prototype.getAllThermostats = function () {
                return this.repositoryHelper.$http({
                    method: "GET",
                    url: "https://my-json-server.typicode.com/Bukixo/thermostats/thermostats"
                })
                    .then(this.repositoryHelper.success)
                    .catch(this.repositoryHelper.fail);
            };
            DataAccessService.inject = ["repositoryHelper"];
            return DataAccessService;
        }());
        repositories.DataAccessService = DataAccessService;
        angular
            .module("app.repositories")
            .service("dataAccessService", DataAccessService);
    })(repositories = app.repositories || (app.repositories = {}));
})(app || (app = {}));
