import Controller from '@ember/controller';
import {inject as service} from '@ember/service';
import {get} from '@ember/object';

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
            scope: 'openid profile user_metadata app_metadata'
          }
        }
      };
      get(this, 'session').authenticate('authenticator:auth0-lock', lockOptions);
    },
  }
});
