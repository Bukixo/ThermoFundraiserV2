// namespace app.services {
//     "use strict";
//     export interface IDataService {
//         $http: ng.IHttpService;
//         fail: (error: any) => {};
//         success: (response: any) => {};
//         // searchCriteriaQuery: (searchCriteria: any) => string;
//     }
//     export class DataService implements IDataService {
//         public static inject: string[] = ["$http", "q"]
//         // public apiUrl: string;
//         constructor(
//             public $http: ng.IHttpService,
//             protected $q: ng.IQService
//         ) {
//         }
//         public fail: (error: any) => any = (error) => {
//             let msg = error.data ? error.data.Message : "Repository operation failed";
//             let reason: string = "operation failed";
//             console.log(msg, reason);
//             return this.$q.reject(msg);
//         }
//         public success: (response: any) => any = (response) => {
//             console.log("response", response.data);
//             return response.data;
//         }
//         public getAllThermos(): ng.IPromise<app.domain.IThermostat[]> {
//             return this.$http({
//                 method: "GET",
//                 url: "https://my-json-server.typicode.com/Bukixo/thermostats/thermostats"
//             })
//             .then(this.success)
//             .catch(this.fail);
//         }
//     }
//     angular
//         .module("app.services")
//         .service("dataService", DataService);
// }
