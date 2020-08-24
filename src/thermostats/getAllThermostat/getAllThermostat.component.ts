namespace app.crud.getAllThermostatComponent {

    class GetAllThermostats implements ng.IComponentOptions {
        public templateUrl: string;

        constructor() {

            this.templateUrl = "src/thermostats/getAllThermostat/getAllThermostat.component.html"
        }
    }

    angular.module("app.crud.getAllThermostatsComponent").component("getAllThermostats", new GetAllThermostats());
}