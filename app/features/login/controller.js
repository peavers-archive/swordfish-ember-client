import Controller from '@ember/controller';
import {inject as service} from '@ember/service';
import {get} from '@ember/object';
import EmberPusher from "ember-pusher";

export default Controller.extend({
  session: service(),

  actions: {
    login() {
      const lockOptions = {
        container: "login-container",
        oidcConformant: true,
        auth: {
          audience: "http://swordfish-service",
          params: {
            scope: 'openid profile'
          }
        }
      };
      get(this, 'session').authenticate('authenticator:auth0-lock', lockOptions);
    },
  }
});
