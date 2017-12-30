import Controller from '@ember/controller';
import {inject as service} from '@ember/service';
import {get} from '@ember/object';
import EmberPusher from "ember-pusher";

export default Controller.extend(EmberPusher.Bindings, {
  session: service(),
  pusher: service(),

  PUSHER_SUBSCRIPTIONS: {
    restore_event: ['restore_info', 'restore_success', 'restore_error'],
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

    restoreInfo(data) {
      get(this, 'notifications').info(data);
    },

    restoreSuccess(data) {
      get(this, 'notifications').success(data);
    },

    restoreError(data) {
      get(this, 'notifications').error(data);
    },

    login() {
      const lockOptions = {
        avatar: null,
        container: "login-container",
        oidcConformant: true,
        hashCleanup: true,
        auth: {
          audience: "http://swordfish-service",
          params: {
            scope: 'openid profile'
          }
        }
      };
      get(this, 'session').authenticate('authenticator:auth0-lock', lockOptions);
    },

    logout() {
      get(this, 'session').invalidate();
    }
  }
});
