import Controller from '@ember/controller';
import {inject as service} from '@ember/service';
import {get} from '@ember/object';
import EmberPusher from "ember-pusher";
import Ember from 'ember';

export default Controller.extend(EmberPusher.Bindings, {
  session: service(),
  pusher: service(),

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

      Ember.$(`#${id}`).addClass('is-restoring').removeClass('is-restoring-queued');
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

  }
});
