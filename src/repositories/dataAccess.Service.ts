namespace app.repositories {
    "use strict";

    export interface IDataAccessService {
        repositoryHelper: app.repositories.IRepositoryHelper

    }

    export class DataAccessService implements IDataAccessService {
        public static inject: string[] = ["repositoryHelper"]
        // public apiUrl: string;
        constructor(
            public repositoryHelper: app.repositories.RepositoryHelper
        ) { }

        public getAllThermostats(): ng.IPromise<app.domain.IThermostat[]> {
            return this.repositoryHelper.$http({
                method: "GET",
                url: "https://my-json-server.typicode.com/Bukixo/thermostats/thermostats"
            })
                .then(this.repositoryHelper.success)
                .catch(this.repositoryHelper.fail)

        }

        public getThermostat(thermostatId: string): ng.IPromise<app.domain.IThermostat[]> {
            return this.repositoryHelper.$http({
                method: "GET",
                url: `https://my-json-server.typicode.com/Bukixo/thermostats/thermostats/${thermostatId}`
            })
                .then(this.repositoryHelper.success)
                .catch(this.repositoryHelper.fail)
        }

    }


    angular
        .module("app.repositories")
        .service("dataAccessService", DataAccessService);
}
