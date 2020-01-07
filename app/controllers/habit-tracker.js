import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
    showFormDialog: false,
    showDeleteDialog: false,
    showHabitDetailsDialog: false,
    showEditDialog: false,
    confirmation: false,
    habits: computed(function() {
        return this.get('store').findAll('habit');
    }),
    habitsProps: computed('habits.length', function() {
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

    newHabit: computed(function() {
      return this.store.createRecord('habit', {
        title: '',
        description: '',
        daysGoal: ''
      });
    }),

    actions: {
        showFormDialogAction() {
          const newHabit = this.store.createRecord('habit', {
            title: '',
            description: '',
            daysGoal: ''
          });
          this.set('newHabit', newHabit);
          this.set("showFormDialog", true);
        },
        closeFormDialogAction() {
          this.get('newHabit').deleteRecord();
          this.set("showFormDialog", false);
        },
        closeDeleteDialogAction() {
          this.set("showDeleteDialog", false);
        },
        showDeleteDialogAction(habit) {
          this.set('currentHabit', habit);
          this.set("showDeleteDialog", true);
        },
        addHabit() {
          this.get('newHabit').save();
          this.set("showFormDialog", false);
        }, 
        editHabit() {
          this.get('currentHabit').save();
          this.set("showFormDialog", false);
        },
        confirmDelete(habit) {
          this.get('currentHabit').destroyRecord();
          this.set('showDeleteDialog', false);
        },
        showHabitDetailsDialogAction(habit) {
          this.set('currentHabit', habit);
          this.set('showHabitDetailsDialog', true);
        },
        closeHabitDetailsDialogAction() {
          this.set('showHabitDetailsDialog', false);
        },
        showEditDialogAction(habit) {
          this.set('currentHabit', habit);
          this.set('showEditDialog', true);
        },
        closeEditDialogAction() {
          this.set('showEditDialog', false);
        },
        setCurrentHabit(habit){
          this.set('currentHabit', habit);
        }
    },

});
