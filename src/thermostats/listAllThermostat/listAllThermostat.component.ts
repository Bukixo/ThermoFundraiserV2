namespace app.crud.listAllThermostatComponent {
    "use strict";

    interface IListAllThermostat {
        thermostats: app.domain.IThermostat[];

    }

    class ListAllThermostatsController implements IListAllThermostat {

        public thermostats: app.domain.IThermostat[];
        public remainingCapital: number;


        constructor(){
        };


        public getThermostats(): void {

            this.thermostats = [
                {
                    "thermostatId" : 1,
                    "imageUrl": "https://i.pinimg.com/564x/56/f7/0a/56f70aca3170062c6f5e22d834c3f3fd.jpg",
                    "name" : "nigeria",
                    "deadline" : new Date(2021, 10, 20),
                    "creationDate": new Date().toLocaleDateString(),
                    "capitalGoal": 2000,
                    "currentCapital": 50,
                    "remainingCapital": this.calculateRemainingCapital("capitalGoal", "currentCpital")
                 }
                // {
                //     "thermostatId" : 2,
                //     "imageUrl": "https://i.pinimg.com/564x/8e/74/f3/8e74f3b2ae463bd38b356a81c089b44c.jpg",
                //     "name" : "teeth whitening",
                //     "deadline" : new Date(2020, 12, 20),
                //     "creationDate": new Date().toLocaleDateString(),
                //     "capitalGoal": 500,
                //     "currentCapital": 35,
                //     "remainingCapital": this.calculateRemainingCapital("capitalGoal", "currentCpital")
                // },
                // {
                //     "thermostatId" : 2,
                //     "imageUrl": "https://i.pinimg.com/564x/34/11/c1/3411c1149a31de5d2c7d45547dabf35f.jpg",
                //     "name" : "YSL Bag",
                //     "deadline" : new Date(2020, 12, 20),
                //     "creationDate": new Date().toLocaleDateString(),
                //     "capitalGoal": 500,
                //     "currentCapital": 35,
                //     "remainingCapital": this.calculateRemainingCapital("capitalGoal", "currentCpital")
                // }

            ]
        }


        public calculateRemainingCapital( capitalGoal, currentCapital): number {

            return this.remainingCapital = capitalGoal - currentCapital;

        }
        
        public $onInit(): void {
            this.getThermostats();
            console.log("thermostat", this.thermostats);
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