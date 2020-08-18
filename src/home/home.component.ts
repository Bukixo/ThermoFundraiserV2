namespace app.home {
    
    class HomeComponent implements ng.IComponentOptions {
        public templateUrl: string = "src/home/home.component.html"
    }
    angular.module("App").component("homeComponent", new HomeComponent());
}
