import Route from '@ember/routing/route';
import { get } from '@ember/object';
import RSVP from "rsvp";
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Route.extend(AuthenticatedRouteMixin, {
  model() {
    return RSVP.hash({
      instances: get(this, 'store').findAll('instance'),
    });
  },

  setupController(controller, models) {
    controller.setProperties(models);
  },

  actions: {
    triggerInstanceEvent(instance) {
      instance.save();
    },
  }

});
