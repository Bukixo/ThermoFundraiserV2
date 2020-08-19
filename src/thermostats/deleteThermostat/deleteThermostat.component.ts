namespace app.crud.deleteThermostatComponent {

    class DeleteThermostatComponent implements ng.IComponentOptions {

        public templateUrl: string = "src/thermostats/deleteThermostat/deleteThermostat.component.html"
    }

    angular.module("app.crud.deleteThermostatComponent").component("deleteThermostat", new DeleteThermostatComponent());
}