import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function () {

  this.route('instances', function () {
    this.route('view', {path: '/view/:instance_id'});
    this.route('edit');
    this.route('new');
    this.route('all');
  });

  this.route('error');

  this.route('users', function () {
    this.route('settings');
  });

  this.route('setup');
});

export default Router;
