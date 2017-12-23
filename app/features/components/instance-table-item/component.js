import Component from '@ember/component';
import { get, computed } from '@ember/object';

export default Component.extend({

  tagName: "tr",
  classNames: ["instance-table-item is-desktop is-vcentered"],

  isRunning: computed('instance.state', function () {
    return get(this, 'instance.state') === "running";
  }),

  isStopped: computed('instance.state', function () {
    return get(this, 'instance.state') === "stopped";
  }),

  actions: {
    triggerInstanceEvent(event) {
      const instance = get(this, "instance");
      instance.set('swordfishCommand', event);

      this.sendAction("triggerInstanceEvent", instance);
    }
  }

});
