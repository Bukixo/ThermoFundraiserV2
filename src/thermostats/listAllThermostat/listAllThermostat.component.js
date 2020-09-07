var app;
(function (app) {
    var crud;
    (function (crud) {
        var listAllThermostatComponent;
        (function (listAllThermostatComponent) {
            "use strict";
            // interface ICompanyDetailsV2Vm {
            //     leadId: string;
            //     organisation: app.domain.IOnboardingOrganisationDetailsV2;
            //     saveCompanyDetails: () => void;
            //     dataLoaded: boolean;
            // }
            // class CompanyDetailsV2Controller implements ICompanyDetailsV2Vm {
            // interface IListAllThermostat
            var ListAllThermostats = /** @class */ (function () {
                function ListAllThermostats() {
                    this.templateUrl = "src/thermostats/listAllThermostat/listAllThermostat.component.html";
                }
                return ListAllThermostats;
            }());
            angular.module("app.crud.listAllThermostatsComponent").component("listAllThermostats", new ListAllThermostats());
        })(listAllThermostatComponent = crud.listAllThermostatComponent || (crud.listAllThermostatComponent = {}));
    })(crud = app.crud || (app.crud = {}));
})(app || (app = {}));
