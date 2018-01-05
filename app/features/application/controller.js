import Controller from '@ember/controller';
import {inject as service} from '@ember/service';
import {get} from '@ember/object';
import EmberPusher from "ember-pusher";

export default Controller.extend({
  session: service(),

  actions: {
    logout() {
      get(this, 'session').invalidate();
    }
  }
});
