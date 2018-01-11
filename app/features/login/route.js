import Route from '@ember/routing/route';
import {inject as service} from '@ember/service';
import UnauthenticatedRouteMixin from 'ember-simple-auth/mixins/unauthenticated-route-mixin';
import {get} from '@ember/object';
import config from "../../config/environment";

export default Route.extend(UnauthenticatedRouteMixin, {
  session: service(),

  actions: {
    login() {
      const lockOptions = {
        container: "login-container",
        oidcConformant: true,
        hashCleanup: true,
        auth: {
          audience: "http://swordfish-service",
          params: {
            scope: 'openid profile email',
          },
        }
      };

      get(this, 'session').authenticate('authenticator:auth0-lock', lockOptions);

    },
  }
})
