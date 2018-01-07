import Route from '@ember/routing/route';
import {get} from '@ember/object';
import RSVP from "rsvp";
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Route.extend(AuthenticatedRouteMixin, {
  model(params) {
    return RSVP.hash({
      instance: get(this, 'store').findRecord('instance', params.instance_id),
      stacks: get(this, 'store').findAll('stack'),
      stackEvent: get(this, 'store').createRecord('stackEvent')
    });
  },

  setupController(controller, models) {
    controller.setProperties(models);
  },

});
