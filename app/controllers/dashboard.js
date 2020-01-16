import Controller, {inject as controller} from '@ember/controller';
import { computed } from '@ember/object';
// import fetch from 'fetch';

export default Controller.extend({
  // ajax: Ember.inject.service(),
  sportTotalDays: null,
  lifestyleTotalDays: null,
  financialTotalDays: null,
  socialTotalDays: null,
  cultureTotalDays: null,
  init() {
    this._super(...arguments);
    this.get('sportDaysFetch');
    this.get('lifestyleDaysFetch');
    this.get('financialDaysFetch');
    this.get('socialDaysFetch');
    this.get('cultureDaysFetch');
  },

  sportDaysFetch: computed(async function() {
    return fetch('habits/sport_habits_days')
      .then((response) => {
        return response.json();
      }).then(dayz => {
        let noDays = dayz.days;
        // document.getElementsByClassName('test123456')[0].innerHTML = noDays;
        this.set('sportTotalDays', noDays);
        return noDays;
      });
  }),
  lifestyleDaysFetch: computed(async function() {
    return fetch('habits/lifestyle_habits_days')
      .then((response) => {
        return response.json();
      }).then(dayz => {
        let noDays = dayz.days;
        this.set('lifestyleTotalDays', noDays);
        return noDays;
      });
  }),
  financialDaysFetch: computed(async function() {
    return fetch('habits/financial_habits_days')
      .then((response) => {
        return response.json();
      }).then(dayz => {
        const noDays = dayz.days;
        this.set('financialTotalDays', noDays);
        return noDays;
      });
  }),
  socialDaysFetch: computed(async function() {
    return fetch('habits/social_habits_days')
      .then((response) => {
        return response.json();
      }).then(dayz => {
        const noDays = dayz.days;
        this.set('socialTotalDays', noDays);
        return noDays;
      });
  }),
  cultureDaysFetch: computed(async function() {
    return fetch('habits/culture_habits_days')
      .then((response) => {
        return response.json();
      }).then(dayz => {
        const noDays = dayz.days;
        this.set('cultureTotalDays', noDays);
        return noDays;
      });
  }),

  habitTracker: controller('habit-tracker'),
  lifestyleDays: computed(function() {  
    return this.habitTracker.get('lifestyleDays');
  }),
  habits: computed(function() {  
    return this.get('store').findAll('habit');
  }),
  habitsProps: computed('habits.length', function() {
    return this.get('habits');
  }),
  lifestyleData: computed('habitsProps.length', 'habitsProps.@each.category', function(){
      return this.get('habitsProps').filterBy('category','Lifestyle').length;
  }),
  sportData: computed('habitsProps.length', 'habitsProps.@each.category', function(){
    return this.get('habitsProps').filterBy('category','Sport').length;
  }),
  financialData: computed('habitsProps.length', 'habitsProps.@each.category', function(){
    return this.get('habitsProps').filterBy('category','Financial').length;
  }),
  socialData: computed('habitsProps.length', 'habitsProps.@each.category', function(){
    return this.get('habitsProps').filterBy('category','Social').length;
  }),
  cultureData: computed('habitsProps.length', 'habitsProps.@each.category', function(){
    return this.get('habitsProps').filterBy('category','Culture').length;
  }),
  priorityOptions: computed('lifestyleData', 'sportData', 'financialData', function() {
    return {
      labels: ['Lifestyle', 'Sport', 'Financial', 'Social', 'Culture'],
      datasets: [
        {
          data: [this.get('lifestyleData'), this.get('sportData'), this.get('financialData'), this.get('socialData'), this.get('cultureData')],
          backgroundColor: [
            'rgba(255, 99, 132)',
            'rgba(54, 162, 235)',
            'rgba(255, 206, 86)',
            'rgba(75, 192, 192)',
            'rgba(153, 102, 255)',
            'rgba(255, 159, 64)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1,

        }
      ],
    };
  }),
  priorityOptions2: computed('lifestyleTotalDays', 'sportTotalDays', 'financialTotalDays', 'socialTotalDays', 'cultureTotalDays', function() {
    return {
      labels: ['Lifestyle Days Checked', 'Sport Days Checked', 'Financial Days Checked', 'Social Days Checked', 'Culture Days Checked'],
      datasets: [
        {
          data: [this.get('lifestyleTotalDays'), this.get('sportTotalDays'), this.get('financialTotalDays'), this.get('socialTotalDays'), this.get('cultureTotalDays')],
          backgroundColor: [
            'rgba(255, 99, 132)',
            'rgba(54, 162, 235)',
            'rgba(255, 206, 86)',
            'rgba(75, 192, 192)',
            'rgba(153, 102, 255)',
            'rgba(255, 159, 64)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1,

        }
      ],
    };
  }),
  actions: {
    
  }

});
