import Route from '@ember/routing/route';
import RSVP from "rsvp";
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';
import {get} from '@ember/object';
import {inject as service} from '@ember/service';

export default Route.extend(AuthenticatedRouteMixin, {

  session: service(),

  model() {
    return RSVP.hash({
      user: get(this, 'store').findRecord('user', get(this, 'session.data.authenticated.profile.sub'))
    });
  },

  afterModel(models) {
    const user = models['user'];

    if (get(user, 'team.id') !== undefined) {
      this.transitionTo('teams.edit', get(user, 'team.id'))
    }
  },

  setupController(controller, models) {
    controller.setProperties(models);
  },

  actions: {
    join(team) {
      let user = get(this, 'store').peekRecord('user', get(this, 'session.data.authenticated.profile.sub'));

      user.set('team', team);
      user.save();
    },

    leave() {
      let user = get(this, 'store').peekRecord('user', get(this, 'session.data.authenticated.profile.sub'));

      user.set('team', null);
      user.save();
    }
  }

});
