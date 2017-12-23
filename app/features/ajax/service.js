import Ember from 'ember';
import AjaxService from 'ember-ajax/services/ajax';
import config from '../../config/environment';

export default AjaxService.extend({
  session: Ember.inject.service(),
  host: config.APP.SWORDFISH,
  dataType: 'json',
  contentType: 'application/json',
  headers: Ember.computed('session.authenticated.accessToken', {
    get() {
      let headers = {};
      const accessToken = this.get('session.data.authenticated.accessToken');
      headers['Authorization'] = `Bearer ${accessToken}`;
      return headers;
    },
  })
});
