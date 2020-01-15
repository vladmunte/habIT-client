import Controller, {inject as controller} from '@ember/controller';
import { computed } from '@ember/object';
import Ember from 'ember';

export default Controller.extend({
  // ajax: Ember.inject.service(),
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
  actions: {
    sendRequest() {
      return this.get('ajax').request('/habits/sport_habits_days', {
        method: 'GET'
      })
    }
  }

});
