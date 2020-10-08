namespace app.crud.listAllThermostatComponent {
    "use strict";

    interface IListAllThermostat {
        thermostats: app.domain.IThermostat[];
        $http: ng.IHttpService;
        fail: (error: any) => {};
        success: (response: any) => {};

    }

    class ListAllThermostatsController implements IListAllThermostat {

        public thermostats: app.domain.IThermostat[];

        public static inject: string[] = ["$http", "q"]

        constructor(
            public $http: ng.IHttpService,
            protected $q: ng.IQService
        ) {
        }
        public fail: (error: any) => any = (error) => {
            let msg = error.data ? error.data.Message : "Repository operation failed";
            let reason: string = "operation failed";

            console.log(msg, reason);

            return this.$q.reject(msg);
        }

        public success: (response: any) => any = (response) => {
            console.log("response", response.data);
            this.thermostats = response.data;
                this.calculateRemainingValue(this.thermostats);
        }

        public getAllThermos(): ng.IPromise<app.domain.IThermostat[]> {
            return this.$http({
                method: "GET",
                url: "https://my-json-server.typicode.com/Bukixo/thermostats/thermostats"
            })
            .then(this.success)
            .catch(this.fail);
        }

        public $onInit(): void {
            this.getAllThermos();
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