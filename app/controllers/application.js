import Controller, {inject as controller} from '@ember/controller';
import { computed } from '@ember/object';


export default Controller.extend({ 
  actions: {
    darkModeToggle: function() {
      document.body.classList.toggle("darkMode");
    }
  }
});