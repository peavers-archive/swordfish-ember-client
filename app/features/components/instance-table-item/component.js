import Component from '@ember/component';
import {computed, get} from '@ember/object';
import {inject as service} from '@ember/service';
import EmberPusher from 'ember-pusher';

export default Component.extend(EmberPusher.Bindings, {
  session: service(),
  pusher: service(),

  pusherEvents: ['event-one', 'event-two'],
  tagName: "tr",
  classNames: ["instance-table-item is-desktop is-vcentered"],

  isRunning: computed('instance.state', function () {
    return get(this, 'instance.state') === "running";
  }),

  isStopped: computed('instance.state', function () {
    return get(this, 'instance.state') === "stopped";
  }),

  didInsertElement() {
    let channel = this.get('session.data.authenticated.profile.sub').split('|')[1];

    let pusher = this.get('pusher');

    pusher.wire(this, channel, this.get('pusherEvents'));
  },

  willDestroyElement() {
    this.get('pusher').unwire(this, this.get('session.data.authenticated.profile.sub').split('|')[1]);
  },

  actions: {
    triggerInstanceEvent(event) {
      const instance = get(this, "instance");
      instance.set('swordfishCommand', event);

      this.sendAction("triggerInstanceEvent", instance);
    }
  }

});
