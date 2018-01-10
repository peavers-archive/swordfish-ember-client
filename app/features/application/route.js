import Route from '@ember/routing/route';
import ApplicationRouteMixin from 'ember-simple-auth-auth0/mixins/application-route-mixin';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';
import {get, set} from '@ember/object';

export default Route.extend(AuthenticatedRouteMixin, ApplicationRouteMixin, {

  beforeModel() {
    this._super.apply(this, ...arguments);

    let user;
    const session = get(this, 'session.data');
    const userId = get(session, 'authenticated.profile.sub').split('|')[1];

    try {
      user = get(this, 'store').findRecord('user', userId);
    } catch (error) {
      user = get(this, 'store').createRecord('user', {
        id: userId,
        swordfishCommand: "create",
      }).save();
    }

    const awsKey = get(user, 'awsKey');
    const awsSecret = get(user, 'awsSecret');
    const awsRegion = get(user, 'awsRegion');

    if (awsKey === "" || awsSecret === "" || awsRegion === "" || awsKey === undefined || awsSecret === undefined || awsRegion === undefined) {
      this.transitionTo('setup')
    }
  },

});
