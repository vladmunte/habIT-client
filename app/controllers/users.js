import Controller from '@ember/controller';
import { computed } from "@ember/object";

export default Controller.extend({
  users: computed(function () {
    return this.get("store").findAll("user");
  })

});
