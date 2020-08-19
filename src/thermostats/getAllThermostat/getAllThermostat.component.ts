namespace app.crud.getAllThermostatComponent {

    class GetAllThermostats implements ng.IComponentOptions {
        
        public templateUrl: string = "src/thermostats/getAllThermostat/getAllThermostat.component.html"
    }

    angular.module("app.crud.getAllThermostatsComponent").component("getAllThermostats", new GetAllThermostats());
}