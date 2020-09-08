var app;
(function (app) {
    var domain;
    (function (domain) {
        var Thermostat = /** @class */ (function () {
            function Thermostat(thermostatId, imageUrl, name, deadline, creationDate, currentCapital, capitalGoal, remainingCapital) {
                if (remainingCapital === void 0) { remainingCapital = capitalGoal + currentCapital; }
                this.thermostatId = thermostatId;
                this.imageUrl = imageUrl;
                this.name = name;
                this.deadline = deadline;
                this.creationDate = creationDate;
                this.currentCapital = currentCapital;
                this.capitalGoal = capitalGoal;
                this.remainingCapital = remainingCapital;
            }
            return Thermostat;
        }());
        domain.Thermostat = Thermostat;
    })(domain = app.domain || (app.domain = {}));
})(app || (app = {}));
