import Ember from 'ember';
import Route from '@ember/routing/route';

export default Route.extend({

  setupController(controller, error) {
    Ember.Logger.debug(error.message);
    this._super(...arguments);
  }

});
