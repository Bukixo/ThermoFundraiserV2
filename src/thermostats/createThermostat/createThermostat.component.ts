namespace app.crud.createThermostatComponent {
    "use strict"
    
    class CreateThermostatComponent implements ng.IComponentOptions {

        public templateUrl: string = "src/thermostats/createThermostat/createThermostat.component.html"
    }

    angular.module("app.crud.createThermostatComponent").component("createThermostat", new CreateThermostatComponent());

}