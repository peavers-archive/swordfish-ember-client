import Component from '@ember/component';
import {computed, get} from '@ember/object';

export default Component.extend({

  state: computed('instance.state', function () {
    return get(this, 'instance.state') === "running" || get(this, 'instance.state') === "pending" ? 'start' : 'stop';
  }),

  actions: {
    triggerInstanceEvent(event) {
      this.sendAction("triggerInstanceEvent", this.get("instance"), event);
    },

    triggerRestoreEvent(stackEvent) {
      this.sendAction('triggerRestoreEvent', stackEvent);
    },
  }

});
