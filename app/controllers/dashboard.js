import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
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
  priorityOptions: computed('lifestyleData', 'sportData', 'financialData', function() {
    return {
      labels: ['Lifestyle', 'Sport', 'Financial'],
      datasets: [
        {
          data: [this.get('lifestyleData'), this.get('sportData'), this.get('financialData')],
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
          barPercentage: 0.33,
          
        }
      ],
      // These labels appear in the legend and in the tooltips when hovering different arcs

    };
  }),
});
