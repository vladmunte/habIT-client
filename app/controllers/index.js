import Controller from '@ember/controller';
import { computed } from "@ember/object";

export default Controller.extend({
  quotes: computed(function () {
    return this.store.findAll("quote");
  })
});
