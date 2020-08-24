namespace app.crud.getThermostatComponent {

    interface IGetThermostat {
        thermostatId : string;
	}
	
	class GetThermostatController implements IGetThermostat {
        public thermostatId : string;

        constructor(){

        }

        public $onInit(): void {
            this.thermostatId = "200";
            console.log("test");
        }
    }


    class GetThermostat implements ng.IComponentOptions {
        public templateUrl: string;
        public controller: any;
        public bindings: any;

        constructor() {
            this.controller = GetThermostatController;
            this.templateUrl = "src/thermostats/getThermostat/getThermostat.component.html";
            this.bindings = {
                thermostat: '<'
            }
        }
    }

    angular.module("app.crud.getThermostatComponent").component("getThermostat", new GetThermostat());
}