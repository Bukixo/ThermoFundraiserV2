namespace app.crud.listAllThermostatComponent {
    "use strict";

    interface IListAllThermostat {
        thermostats: app.domain.IThermostat[];

    }

    class ListAllThermostatsController implements IListAllThermostat {

        public thermostats: app.domain.IThermostat[];
        static $inject = ["dataAccessService"];

        constructor(
            public dataAccessService: app.repositories.DataAccessService
        ) {
        }

        public $onInit(): void {
            this.getThermostats();
        }

        public getThermostats(): void {
            this.dataAccessService.getAllThermostats().then((data) => {
                this.thermostats = data;
                this.calculateRemainingValue(this.thermostats);
            })
        }

        public calculateRemainingValue( thermo: app.domain.IThermostat[]) {
            console.log("thermostat", this.thermostats);
                thermo.forEach(thermostat =>{
                    let remainingValue = thermostat.capitalGoal - thermostat.currentCapital
                    thermostat.remainingCapital = remainingValue
                }
            )
        }

    }

    class ListAllThermostatsComponent implements ng.IComponentOptions {

        public templateUrl: string = "src/thermostats/listAllThermostat/listAllThermostat.component.html"
        public controller: any;

        constructor() {
            this.controller = ListAllThermostatsController;
        }
    }

    angular.module("app.crud.listAllThermostatsComponent").component("listAllThermostats", new ListAllThermostatsComponent());
}