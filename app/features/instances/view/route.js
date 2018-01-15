import Route from '@ember/routing/route';
import {get, set} from '@ember/object';
import RSVP from "rsvp";
import {inject as service} from "@ember/service";
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Route.extend(AuthenticatedRouteMixin, {

  ajax: service(),

  model(params) {
    return RSVP.hash({
      instance: get(this, 'store').findRecord('instance', params.instance_id),
      stackEvent: get(this, 'store').createRecord('stackEvent'),

      stacks: get(this, 'store').findAll('stack').catch(() => {
        set(this, 'stacks', false);
      }),
    });
  },

  setupController(controller, models) {
    controller.setProperties(models);
  },

  actions: {
    triggerRestoreEvent(stackEvent) {
      return get(this, 'ajax').post('/stack-events', {
        data: JSON.stringify(stackEvent),
      });
    },

    triggerInstanceEvent(instance, event) {
      instance.set('swordfishCommand', event);
      if (event === "terminate") {
        instance.save().then((instance) => instance.deleteRecord()).then(() => {
          this.transitionTo('instances');
        });
      } else {
        instance.save();
      }
    },

  }

});
