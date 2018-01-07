import Route from '@ember/routing/route';
import {get} from '@ember/object';
import RSVP from "rsvp";
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';
import Ember from "ember";

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
