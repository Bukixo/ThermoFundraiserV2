namespace app.crud.getThermostatComponent {

    class GetThermostat implements ng.IComponentOptions {
        
        public templateUrl: string = "src/thermostats/getThermostat/getThermostat.component.html"
    }

    angular.module("app.crud.getThermostatComponent").component("getThermostat", new GetThermostat());
}