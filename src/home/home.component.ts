namespace app.home {
    "use strict";
    
    class HomeComponent implements ng.IComponentOptions {
        public bindings: any;
        public templateUrl: string;

        constructor() {
            this.templateUrl = "src/home/home.component.html";
        }
    }
    angular.module("app.home").component("homeComponent", new HomeComponent());
}
