import Controller from '@ember/controller';
import {inject as service} from '@ember/service';
import {get} from '@ember/object';
import EmberPusher from "ember-pusher";
import Ember from 'ember';

export default Controller.extend(EmberPusher.Bindings, {
  session: service(),
  pusher: service(),
  ajax: service(),

  PUSHER_SUBSCRIPTIONS: {
    restore_event: ['restore_info', 'restore_success', 'restore_error'],
    server_refresh: ['server_refresh']
  },

  actions: {
    serverRefresh(data) {
      get(this, 'store').pushPayload(JSON.parse(data));
    },

    restoreInfo(data) {
      const json = JSON.parse(data);
      const attributes = json.data.attributes;
      const id = attributes['project-id'];

      Ember.$(`#${id}`).addClass('is-restoring').removeClass('is-restoring-queued is-restoring-done');
    },

    restoreSuccess(data) {
      const json = JSON.parse(data);
      const attributes = json.data.attributes;
      const id = attributes['project-id'];

      Ember.$(`#${id}`).addClass('is-restoring-done').removeClass('is-restoring');
    },

    restoreError(data) {
      get(this, 'notifications').error(data);
    },

    restore() {
      const stackEvent = this.controller.get('stackEvent');

      return get(this, 'ajax').post('/stack-events', {
        data: JSON.stringify(stackEvent),
        context: this,
        success: function () {
          this.controller.get('instance').rollbackAttributes();
        },
      });
    },

    triggerInstanceEvent(instance, event) {
      instance.set('swordfishCommand', event);
      if (event === "terminate") {
        instance.save().then((instance) => instance.deleteRecord()).then(() => {
          this.transitionTo('instances');
        });
      } else {
        instance.save();
      }
    },

  }
});
