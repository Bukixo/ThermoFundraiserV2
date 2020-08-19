namespace app.crud.updateThermostatComponent {

    class UpdateThermostatComponent implements ng.IComponentOptions {

        public templateUrl: string = "src/thermostats/updateThermostat/updateThermostat.component.html"
    }

    angular.module("app.crud.updateThermostatComponent").component("updateThermostat", new UpdateThermostatComponent());
}