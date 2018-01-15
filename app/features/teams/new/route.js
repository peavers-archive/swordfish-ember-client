import Route from '@ember/routing/route';
import RSVP from "rsvp";
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';
import {get} from '@ember/object';

export default Route.extend(AuthenticatedRouteMixin, {

  model() {
    return RSVP.hash({
      team: get(this, 'store').createRecord('team', {
        swordfishCommand: 'create',
        ownerId: get(this, 'session.data.authenticated.profile.sub')
      }),
    });
  },

  setupController(controller, models) {
    controller.setProperties(models);
  },

  actions: {
    save(team) {
      team.save();
    },
  }

});
