import Controller from '@ember/controller';
import { computed } from '@ember/object';

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
    },
    habits: computed(function() {
        return {
            
                habit1: {
                    title: "Habit 1",
                    daysGoal: 35,
                    description: "Dummy description for Habit1"
                },
                habit2: {
                    title: "Habit 2",
                    daysGoal: 77,
                    description: "Dummy description for Habit2"
                },
                habit3: {
                    title: "Habit 3",
                    daysGoal: 12,
                    description: "Dummy description for Habit3"
                }
            
            
        }
    })
});
