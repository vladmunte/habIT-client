import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
    showDialog: false,
    habits: computed(function() {
        return this.get('store').findAll('habit');
    }),
    habitsProps: computed(function() {
        return this.get('habits');
    }),
    createHabit: computed(function() {
        var title = this.get('title');
        var description = this.get('description');
        var daysGoal = this.get('daysGoal');

        var newHabit = this.store.createRecord('habit', {
            title: title,
            description: description,
            daysGoal: daysGoal
        });

        return newHabit.save();

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
        addHabit() {
            const habit = this.get('createHabit');
            this.setProperties({
                title: '',
                description: '',
                daysGoal: ''
            });
        },
    },

});
