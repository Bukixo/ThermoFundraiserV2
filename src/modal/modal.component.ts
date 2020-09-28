namespace app.modal {

    interface IModalComponent {

    }

    class ModalComponentController implements ng.IComponentController {

        public test() {
            console.log("controller configured");
        }

        $onInit() {
            this.test();
        }
    }

    class ModalComponent implements ng.IComponentOptions {

        public templateUrl: string = "src/modal/modal.component.html"
        public controller: any = ModalComponentController;
    }
    angular.module("app.modal").component("modalComponent", new ModalComponent());
}