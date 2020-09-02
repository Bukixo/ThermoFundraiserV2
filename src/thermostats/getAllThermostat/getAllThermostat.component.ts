namespace app.crud.getAllThermostatComponent {

    interface IGetThermostat {
        thermostatId : string;
    }
    
    class GetAllThermostatsController implements IGetThermostat {
        public thermostatId : string;

        constructor(){

        }

        public $onInit(): void {
            this.thermostatId = "200";
            console.log(this.thermostatId);

        }

    }

    class GetAllThermostats implements ng.IComponentOptions {
        public templateUrl: string;
        public controller: any;

        constructor() {
            this.templateUrl = "src/thermostats/getAllThermostat/getAllThermostat.component.html";
            this.controller = GetAllThermostatsController
        }

    }

    angular.module("app.crud.getAllThermostatsComponent").component("getAllThermostats", new GetAllThermostats());
}