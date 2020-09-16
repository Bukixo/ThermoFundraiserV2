namespace app.home {
    "use strict";

    class HomeComponent implements ng.IComponentOptions {

        public templateUrl: string;
        public controller: any;

        constructor() {

            this.templateUrl = "src/home/home.component.html";

        }
    }
    angular.module("app.home").component("homeComponent", new HomeComponent());
}
