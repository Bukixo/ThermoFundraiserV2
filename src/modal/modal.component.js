var app;
(function (app) {
    var modal;
    (function (modal) {
        var ModalComponentController = /** @class */ (function () {
            function ModalComponentController() {
            }
            ModalComponentController.prototype.test = function () {
                console.log("controller configured");
            };
            ModalComponentController.prototype.$onInit = function () {
                this.test();
            };
            return ModalComponentController;
        }());
        var ModalComponent = /** @class */ (function () {
            function ModalComponent() {
                this.templateUrl = "src/modal/modal.component.html";
                this.controller = ModalComponentController;
            }
            return ModalComponent;
        }());
        angular.module("app.modal").component("modalComponent", new ModalComponent());
    })(modal = app.modal || (app.modal = {}));
})(app || (app = {}));
