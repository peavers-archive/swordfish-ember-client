import Route from '@ember/routing/route';
import ApplicationRouteMixin from 'ember-simple-auth-auth0/mixins/application-route-mixin';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';
import {get} from '@ember/object';


export default Route.extend(AuthenticatedRouteMixin, ApplicationRouteMixin, {

  afterModel() {
    console.log(get(this, 'session.data.authenticated.profile'));
  },

});
