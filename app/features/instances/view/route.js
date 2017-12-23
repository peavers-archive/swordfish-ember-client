import Route from '@ember/routing/route';
import {get} from '@ember/object';
import RSVP from "rsvp";

export default Route.extend({

  ajax: Ember.inject.service(),

  restoring: true,

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

  actions: {
    restore() {
      const stackEvent = this.controller.get('stackEvent');

      return get(this, 'ajax').post('/stack-events', {
        data: JSON.stringify(stackEvent),
        context: this,
        success: function () {
          this.controller.get('instance').rollbackAttributes();

        },
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
