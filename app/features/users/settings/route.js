import Route from '@ember/routing/route';
import {get} from '@ember/object';
import RSVP from "rsvp";
import {inject as service} from '@ember/service';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Route.extend(AuthenticatedRouteMixin, {
  session: service(),
  ajax: service(),

  saved: false,

  model() {
    return RSVP.hash({
      user: get(this, 'store').createRecord('user')
    });
  },

  setupController(controller, models) {
    this._super(...arguments);

    controller.setProperties(models);
  },

  actions: {
    willTransition() {
      this._super(...arguments);

      this.controller.get('user').rollbackAttributes();
    },

    savePicture(user) {
      return get(this, 'ajax').post('/users/picture', {
        data: JSON.stringify(user),
        context: this,
      });
    },

    saveGitlab(user) {
      return get(this, 'ajax').post('/users/gitlab', {
        data: JSON.stringify(user),
        context: this,
      });
    }
  },

});
