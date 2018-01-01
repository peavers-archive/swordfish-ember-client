import Component from '@ember/component';
import {computed, get} from '@ember/object';

export default Component.extend({

  restoreState: "Not installed",

  developmentServer: computed('instance.imageId', function () {
    return get(this, 'instance.imageId') === "ami-b93422da";
  }),

  state: computed('instance.state', function () {
    return get(this, 'instance.state') === "running" || get(this, 'instance.state') === "pending" ? 'start' : 'stop';
  }),

  actions: {
    triggerInstanceEvent(event) {
      this.sendAction("triggerInstanceEvent", this.get("instance"), event);
    },

    restore(stackEvent) {
      this.sendAction('restore', stackEvent);
    },
  }

});
