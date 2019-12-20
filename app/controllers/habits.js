import Controller from '@ember/controller';

export default Controller.extend({
  habits: computed(function () {
    return this.get("store").findAll("habit");
  })
});
