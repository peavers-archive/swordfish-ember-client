import Route from '@ember/routing/route';
import {get} from '@ember/object';
import RSVP from "rsvp";
import {inject as service} from '@ember/service';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Route.extend(AuthenticatedRouteMixin, {
  session: service(),
  ajax: service(),

  model() {
    const profile = get(this, 'session.data.authenticated.profile');
    const userData = profile['https://swordfish.space/user_metadata'];

    return RSVP.hash({
      user: get(this, 'store').createRecord('user', {
        "awsKey": get(userData, 'aws_key'),
        "awsSecret": get(userData, 'aws_secret'),
        "awsRegion": get(userData, 'aws_region'),

        "silverstripeUsername": get(userData, 'silverstripe_username'),
        "silverstripeToken": get(userData, 'silverstripe_token'),

        "gitlabUsername": get(userData, 'gitlab_username'),
        "gitlabPassword": get(userData, 'gitlab_username')
      })
    });
  },

  setupController(controller, models) {
    this._super(...arguments);

    controller.setProperties(models);
  },

  actions: {
    save(user) {


      return get(this, 'ajax').post('/users', {
        data: JSON.stringify(user),
        context: this,
      }).then(() => {
        get(this, 'session').invalidate();
      });
    },
  },

})
