namespace app.crud.listAllThermostatComponent {
    "use strict";

    // interface ICompanyDetailsV2Vm {
    //     leadId: string;
    //     organisation: app.domain.IOnboardingOrganisationDetailsV2;
    //     saveCompanyDetails: () => void;
    //     dataLoaded: boolean;
    // }

    // class CompanyDetailsV2Controller implements ICompanyDetailsV2Vm {

    // interface IListAllThermostat

    class ListAllThermostats implements ng.IComponentOptions {
        
        public templateUrl: string = "src/thermostats/listAllThermostat/listAllThermostat.component.html"
    }

    angular.module("app.crud.listAllThermostatsComponent").component("listAllThermostats", new ListAllThermostats());
}