import Controller from '@ember/controller';
import {inject as service} from '@ember/service';
import {get} from '@ember/object';
import EmberPusher from "ember-pusher";

export default Controller.extend({
  session: service(),


  PUSHER_SUBSCRIPTIONS: {
    server_refresh: ['server_refresh']
  },

  init() {
    this._super();

    get(this, 'notifications').setDefaultAutoClear(true);
  },

  actions: {
    serverRefresh(data) {
      get(this, 'store').pushPayload(JSON.parse(data));
    },

    logout() {
      get(this, 'session').invalidate();
    }
  }
});
