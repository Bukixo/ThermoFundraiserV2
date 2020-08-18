namespace app.nav {

    class NavbarComponent implements ng.IComponentOptions {
        
        public templateUrl: string = "src/navbar/navbar.component.html"
    }
    
    angular.module("App").component("navbarComponent", new NavbarComponent());
}