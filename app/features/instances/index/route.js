import Route from '@ember/routing/route';
import {get} from '@ember/object';
import RSVP from "rsvp";
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Route.extend(AuthenticatedRouteMixin, {

  beforeModel() {
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

      if (awsKey === undefined || awsSecret === undefined || awsRegion === undefined) {
        this.transitionTo('setup')
      }

      return {"aws_key": awsKey, "aws_secret": awsSecret, "aws_region": awsRegion}

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
  }

});
