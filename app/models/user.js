import DS from 'ember-data';

export default DS.Model.extend({
  fullName: DS.attr(),
  avatar: DS.attr()
});
