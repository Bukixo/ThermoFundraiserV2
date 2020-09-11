namespace app.repositories {
    "use strict";

    export interface IRepositoryHelper {
        $http: ng.IHttpService;
        fail: (error: any) => {};
        success: (response: any) => {};
    }

    export class RepositoryHelper implements IRepositoryHelper {
        public static inject: string[] = ["$http", "q"]

        constructor(
            public $http: ng.IHttpService,
            // protected $q: ng.IQService
        ){};

        public fail: (error: any) => any = (error) => {
            let msg = error.data ? error.data.Message : "Repository operation failed";
            let reason: string = "operation failed";

            console.log(msg, reason);
            // return this.$q.reject(msg);
        }

        public success: (response: any) => any = (response) => {
            console.log("response", response.data);
            return response.data;
        }

    }
        angular.module("app.repositories").service("repositoryHelper", RepositoryHelper);
}