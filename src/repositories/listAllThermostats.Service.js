var app;
(function (app) {
    var repositories;
    (function (repositories) {
        "use strict";
        var ListAllThermostatsService = /** @class */ (function () {
            // public apiUrl: string;
            function ListAllThermostatsService(repositoryHelper) {
                var _this = this;
                this.repositoryHelper = repositoryHelper;
                this.getAllThermostats = function () {
                    return _this.repositoryHelper.$http({
                        method: "GET",
                        url: "https://my-json-server.typicode.com/Bukixo/thermostats/thermostats"
                    })
                        .then(_this.repositoryHelper.success)
                        .catch(_this.repositoryHelper.fail);
                };
            }
            ListAllThermostatsService.inject = ["repositoryHelper"];
            return ListAllThermostatsService;
        }());
        repositories.ListAllThermostatsService = ListAllThermostatsService;
        angular
            .module("app.repositories")
            .service("listAllThermostatsService", ListAllThermostatsService);
    })(repositories = app.repositories || (app.repositories = {}));
})(app || (app = {}));
