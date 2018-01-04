import Route from '@ember/routing/route';
import ApplicationRouteMixin from 'ember-simple-auth-auth0/mixins/application-route-mixin';
import {get} from '@ember/object';
import config from "../../config/environment";

export default Route.extend(ApplicationRouteMixin, {

  actions: {
    error(error, transition) {
      if (error) {
        return this.replaceWith('error');
      }
    },

    login() {
      const lockOptions = {
        avatar: null,
        container: "login-container",
        oidcConformant: true,
        options: {
          hashCleanup: true
        },
        auth: {
          responseType: 'token',
          redirectUrl: config.APP.LOGIN_REDIRECT,
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
