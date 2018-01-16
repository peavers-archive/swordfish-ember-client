import Route from '@ember/routing/route';
import ApplicationRouteMixin from 'ember-simple-auth-auth0/mixins/application-route-mixin';
import {get} from '@ember/object';
import {inject as service} from '@ember/service'

export default Route.extend(ApplicationRouteMixin, {
  session: service(),

  actions: {
    login() {
      const lockOptions = {
        container: "login-container",
        oidcConformant: true,
        hashCleanup: true,
        auth: {
          redirect: true,
          audience: "http://swordfish-service",
          params: {
            scope: 'openid profile email',
          },
        }
      };

      get(this, 'session').authenticate('authenticator:auth0-lock', lockOptions);

    },

    logout() {
      get(this, 'session').invalidate();
    },
  }
})
