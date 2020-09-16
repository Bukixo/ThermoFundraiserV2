namespace app.repositories {
    "use strict";

    export interface IListAllThermostatsService {
        repositoryHelper: app.repositories.IRepositoryHelper
        
    }

    export class ListAllThermostatsService implements IListAllThermostatsService {
        public static inject: string[] = ["repositoryHelper"]
        // public apiUrl: string;
        constructor(
            public repositoryHelper: app.repositories.RepositoryHelper
        ) { }

        public getAllThermostats: () => ng.IPromise<app.domain.IThermostat[]> = () =>
        this.repositoryHelper.$http({
            method: "GET",
            url: "https://my-json-server.typicode.com/Bukixo/thermostats/thermostats"
        })
        .then(this.repositoryHelper.success)
        .catch(this.repositoryHelper.fail)

    }


    angular
        .module("app.repositories")
        .service("listAllThermostatsService", ListAllThermostatsService);
}
