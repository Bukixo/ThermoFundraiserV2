namespace app.home {
    "use strict";
    
    class HomeComponent implements ng.IComponentOptions {
        public templateUrl: string = "src/home/home.component.html"
    }
    angular.module("app.home").component("homeComponent", new HomeComponent());
}
