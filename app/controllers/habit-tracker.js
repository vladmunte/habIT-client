import Controller from '@ember/controller';

export default Controller.extend({
    showDialog: false,
    actions: {
        showDialogAction() {
            this.toggleProperty("showDialog")
        },
        closeDialogAction() {
            this.toggleProperty("showDialog")
        },
        basicSubmitAction() {
            
        }
    }
});
