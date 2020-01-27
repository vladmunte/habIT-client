import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  
    categories: ['Lifestyle', 'Sport', 'Financial', 'Social', 'Culture'],
    showFormDialog: false,
    showDeleteDialog: false,
    showHabitDetailsDialog: false,
    showEditDialog: false,
    showDeletedHabitToast: false,
    showAddedHabitToast: false,
    showEditedHabitToast: false,
    showCheckedToast: false,
    showGoalDoneToasta: false,
    isDone: false,
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
        var category = this.get('category');

        var newHabit = this.store.createRecord('habit', {
            title: title,
            description: description,
            daysGoal: daysGoal,
            category: category
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
          this.get('newHabit').save().then( () => {
            this.set('showAddedHabitToast', true);
          });
          this.set("showFormDialog", false);
        }, 
        editHabit() {
          this.get('currentHabit').save().then( () => {
            this.set('showEditedHabitToast', true)
          });
          this.set("showEditDialog", false);
        },
        confirmDelete(habit) {
          this.get('currentHabit').destroyRecord().then( () =>  {
            this.set('showDeletedHabitToast', true);
          });
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
        },
        closeToastAction() {
          this.set('showDeletedHabitToast', false);
          this.set('showAddedHabitToast', false);
          this.set('showEditedHabitToast', false);
          this.set('showCheckedToast', false);
          this.set('showGoalDoneToast', false);
        },
        showCheckedDialogAction(){
          // this.set('showCheckedToast', true);
        },
        incrementProgress(habit){
          this.set('currentHabit', habit)
          let daysChecked = this.get('currentHabit.daysChecked');
          const daysGoal = this.get('currentHabit.daysGoal');
          const category = this.get('currentHabit.category');
          let lifestyleDays = this.get('lifestyleDays');
          if(daysChecked >= daysGoal) this.set('isDone', true);
          if(!this.get('isDone')){
            this.set('currentHabit.daysChecked', daysChecked + 1);
            this.get('currentHabit').save().then( () => this.set('showCheckedToast', true));
          } else {
            this.set('showGoalDoneToast', true);
            this.set('isDone', false);
          }
          daysChecked = 1;
        },


    },

});
