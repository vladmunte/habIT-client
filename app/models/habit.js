import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  description: DS.attr(),
  daysChecked: DS.attr(),
  daysGoal: DS.attr(),
  habitProgress: DS.attr(),
});
