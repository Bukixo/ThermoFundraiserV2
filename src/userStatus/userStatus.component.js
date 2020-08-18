var app;
(function (app) {
    var userStatus;
    (function (userStatus) {
        var UserStatusComponent = /** @class */ (function () {
            function UserStatusComponent() {
                this.templateUrl = "src/userStatus/userStatus.component.html";
            }
            return UserStatusComponent;
        }());
        angular.module("App").component("userStatusComponent", new UserStatusComponent());
    })(userStatus = app.userStatus || (app.userStatus = {}));
})(app || (app = {}));
