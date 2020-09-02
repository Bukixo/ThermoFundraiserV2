namespace app.crud.getThermostatComponent {

    interface IGetThermostat {
        thermostatId : string;
    }
    
    class GetThermostatController implements IGetThermostat{

        public thermostatId : string;

        constructor(){

        }

    }

    class GetThermostat implements ng.IComponentOptions {
        public bindings: any;
        public templateUrl: string;
        public controller: any;
        
        constructor() {
            this.bindings = {
                thermostatId: "<"
            }
            this.templateUrl = "src/thermostats/getThermostat/getThermostat.component.html";
            this.controller = GetThermostatController
        }
    }

    angular.module("app.crud.getThermostatComponent").component("getThermostat", new GetThermostat());
}