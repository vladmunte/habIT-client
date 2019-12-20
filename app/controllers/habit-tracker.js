import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
    showDialog: false,
    habits: computed(function() {
        this.get('store').findAll('habit');
    }),
    actions: {
        showDialogAction() {
            this.toggleProperty("showDialog")
        },
        closeDialogAction() {
            this.toggleProperty("showDialog")
        },
        basicSubmitAction() {
            
        },
    },
    habitsV2: computed(function() {
        return {
            
                habit1: {
                    title: "Habit 1",
                    daysGoal: 35,
                    daysChecked: 12,
                    description: "Dummy description for Habit1",
                    procent: 100*12/35
                },
                habit2: {
                    title: "Habit 2",
                    daysGoal: 77,
                    daysChecked: 71,
                    description: "Dummy description for Habit2",
                    procent: 100*71/77
                },
                habit3: {
                    title: "Habit 3",
                    daysGoal: 19,
                    daysChecked: 4,
                    description: "Dummy description for Habit3",
                    procent: 100*4/19
                },
                habit4: {
                    title: "Habit 4",
                    daysGoal: 60,
                    daysChecked: 24,
                    description: "Dummy description for Habit4",
                    procent: 100*24/60
                }
        }
    }),

});
