namespace app.userStatus {

    class UserStatusComponent implements ng.IComponentOptions {

        public templateUrl: string = "src/userStatus/userStatus.component.html"
    }

    angular.module("App").component("userStatusComponent", new UserStatusComponent());
}