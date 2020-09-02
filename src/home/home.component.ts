namespace app.home {
    "use strict";
    
    interface IGetThermostat {

    }
    
    class HomeController implements IGetThermostat {


        constructor(){

        }

    }
    class HomeComponent implements ng.IComponentOptions {

        public templateUrl: string;
        public controller: any;

        constructor() {

            this.templateUrl = "src/home/home.component.html";
            this.controller = HomeController
        }
    }
    angular.module("app.home").component("homeComponent", new HomeComponent());
}
