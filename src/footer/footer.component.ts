namespace app.footer {

    class FooterComponent implements ng.IComponentOptions {

        public templateUrl: string = "src/footer/footer.component.html"
    }

    angular.module("App").component("footerComponent", new FooterComponent());
}