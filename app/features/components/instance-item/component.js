import Component from '@ember/component';
import {set, get, computed} from '@ember/object';

export default Component.extend({

  restoring: true,

  developmentServer: computed('instance.imageId', function () {
    return get(this, 'instance.imageId') === "ami-b93422da";
  }),

  state: computed('instance.state', function () {
    return get(this, 'instance.state') === "running" || get(this, 'instance.state') === "pending" ? 'start' : 'stop';
  }),

  actions: {
    triggerInstanceSwitch(event) {
      this.sendAction("triggerInstanceEvent", this.get("instance"), event.newValue);
    },

    triggerInstanceEvent(event) {
      this.sendAction("triggerInstanceEvent", this.get("instance"), event);
    },

    toggleActiveStack(stack) {
      set(this, 'selectedStack', stack);
      set(this.get('stackEvent'), 'projectId', get(stack, 'name'));
    },

    toggleActiveEnvironment(environment) {
      set(this, 'selectedEnvironment', environment);
      set(this.get('stackEvent'), 'environment', get(environment, 'type'));
    },

    toggleActiveMode(mode) {
      set(this, 'selectedMode', mode);
      set(this.get('stackEvent'), 'mode', get(mode, 'type'));
    },

    restore() {
      set(this.get('stackEvent'), 'instanceId', this.get("instance.instanceId"));

      this.sendAction('restore', this.get('stackEvent'));
    },

  }

});
