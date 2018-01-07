import Ember from 'ember';
import Route from '@ember/routing/route';
import {get} from '@ember/object';
import RSVP from "rsvp";
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Route.extend(AuthenticatedRouteMixin, {

  ajax: Ember.inject.service(),

  beforeModel() {
    this._super();

    if (get(this, 'session.data.authenticated')) {
      this._getAwsInformation();
    }
  },

  _getAwsInformation() {
    try {
      const profile = get(this, 'session.data.authenticated.profile');
      const userData = profile['https://swordfish.space/user_metadata'];

      const awsKey = get(userData, 'aws_key');
      const awsSecret = get(userData, 'aws_secret');
      const awsRegion = get(userData, 'aws_region');

      if (awsKey === "" || awsSecret === "" || awsRegion === "") {
        this.transitionTo('setup')
      }

      if (awsKey === undefined || awsSecret === undefined || awsRegion === undefined) {
        this.transitionTo('setup')
      }

    } catch (error) {
      // ignore
    }
  },

  model() {
    return RSVP.hash({
      instance: get(this, 'store').createRecord('instance', {
        swordfishCommand: "create"
      }),

      securityGroups: get(this, 'store').findAll('security-group')
    });
  },

  setupController(controller, models) {
    this._super(...arguments);

    controller.setProperties(models);
  },

  actions: {
    willTransition() {
      this._super(...arguments);

      this.controller.get('instance').rollbackAttributes();
    },

    save() {
      const instance = this.controller.get('instance');

      return get(this, 'ajax').post('/instances', {
        data: JSON.stringify(instance),
        context: this,
        success: function () {
          this.controller.get('instance').rollbackAttributes();
          this.transitionTo('instances');
        },
      });
    }
  },

});
