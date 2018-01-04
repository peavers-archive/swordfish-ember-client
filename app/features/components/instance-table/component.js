import {inject as service} from '@ember/service';
import Component from '@ember/component';
import {computed} from '@ember/object';

export default Component.extend({
  session: service(),

  actions: {
    triggerInstanceEvent(instance) {
      this.sendAction("triggerInstanceEvent", instance);
    },

    triggerBelongsToUser() {
      this.toggleProperty('belongsToUser');
    }
  }

});
