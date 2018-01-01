import Route from '@ember/routing/route';
import {inject as service} from '@ember/service';
import {get} from '@ember/object';
import UnauthenticatedRouteMixin from 'ember-simple-auth/mixins/unauthenticated-route-mixin';
import config from "../../config/environment";

export default Route.extend(UnauthenticatedRouteMixin, {
  session: service(),

  actions: {
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
