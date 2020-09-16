var app;
(function (app) {
    var repositories;
    (function (repositories) {
        "use strict";
        var RepositoryHelper = /** @class */ (function () {
            function RepositoryHelper($http) {
                this.$http = $http;
                this.fail = function (error) {
                    var msg = error.data ? error.data.Message : "Repository operation failed";
                    var reason = "operation failed";
                    console.log(msg, reason);
                    // return this.$q.reject(msg);
                };
                this.success = function (response) {
                    console.log("response", response.data);
                    return response.data;
                };
            }
            ;
            RepositoryHelper.inject = ["$http", "q"];
            return RepositoryHelper;
        }());
        repositories.RepositoryHelper = RepositoryHelper;
        angular.module("app.repositories").service("repositoryHelper", RepositoryHelper);
    })(repositories = app.repositories || (app.repositories = {}));
})(app || (app = {}));
