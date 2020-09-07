var app;
(function (app) {
    var domain;
    (function (domain) {
        var Thermostat = /** @class */ (function () {
            function Thermostat(thermostatId, name, deadline, creationDate, goalDate, currentCapital, capitalGoal, remainingCapital) {
                this.thermostatId = thermostatId;
                this.name = name;
                this.deadline = deadline;
                this.creationDate = creationDate;
                this.goalDate = goalDate;
                this.currentCapital = currentCapital;
                this.capitalGoal = capitalGoal;
                this.remainingCapital = remainingCapital;
            }
            return Thermostat;
        }());
        domain.Thermostat = Thermostat;
    })(domain = app.domain || (app.domain = {}));
})(app || (app = {}));
