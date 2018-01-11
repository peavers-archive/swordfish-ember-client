import Route from '@ember/routing/route';
import RSVP from "rsvp";
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';
import {get} from '@ember/object';
import {inject as service} from '@ember/service';

export default Route.extend(AuthenticatedRouteMixin, {

  ajax: service(),

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

    triggerRefreshAll() {
      return get(this, 'ajax').request('/instances/refresh-all');
    }
  }

});
