import Route from '@ember/routing/route';
import ApplicationRouteMixin from 'ember-simple-auth-auth0/mixins/application-route-mixin';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Route.extend(AuthenticatedRouteMixin, ApplicationRouteMixin, {

  beforeModel() {
    this._super.apply(this, ...arguments);
  },

});
