namespace app.home {
    "use strict";
    
    interface IGetThermostat {
        thermostatId : string;
    }
    
    class HomeController implements IGetThermostat {
        public thermostatId : string;

        constructor(){

        }

        public $onInit(): void {
            this.thermostatId = "200";
            console.log("test");
        }

    }
    class HomeComponent implements ng.IComponentOptions {
        public bindings: any;
        public templateUrl: string;
        public controller: any;

        constructor() {
            this.bindings = '<';
            this.templateUrl = "src/home/home.component.html";
            this.controller = HomeController
        }
    }
    angular.module("app.home").component("homeComponent", new HomeComponent());
}
