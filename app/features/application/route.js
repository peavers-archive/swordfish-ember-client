import Route from '@ember/routing/route';
import ApplicationRouteMixin from 'ember-simple-auth-auth0/mixins/application-route-mixin';
import UnauthenticatedRouteMixin from 'ember-simple-auth/mixins/unauthenticated-route-mixin';
import {get} from '@ember/object';
import {inject as service} from '@ember/service'
import RSVP from "rsvp";


export default Route.extend(ApplicationRouteMixin, UnauthenticatedRouteMixin, {
  session: service(),

  model() {
    return RSVP.hash({
      user: get(this, 'store').findRecord('user', get(this, 'session.data.authenticated.profile.sub'))
    });
  },

  setupController(controller, models) {
    controller.setProperties(models);
  },

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
