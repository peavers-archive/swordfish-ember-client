import Component from '@ember/component';
import {computed, get} from '@ember/object';

export default Component.extend({

  userSetupSilverstripe: false,
  restoreState: "Not installed",

  silverstripeSetup: computed(function () {
    return this._getSilverstripeInformation();
  }),

  _getSilverstripeInformation() {
    try {
      const profile = get(this, 'session.data.authenticated.profile');
      const userData = profile['https://swordfish.space/user_metadata'];

      const silverstripeUsername = get(userData, 'silverstripe_username');
      const silverstripeToken = get(userData, 'silverstripe_token');

      return !(silverstripeUsername === undefined || silverstripeToken === undefined);

    } catch (error) {
      // ignore
    }
  },

  developmentServer: computed('instance.imageId', function () {
    return get(this, 'instance.imageId') === "ami-b93422da";
  }),

  state: computed('instance.state', function () {
    return get(this, 'instance.state') === "running" || get(this, 'instance.state') === "pending" ? 'start' : 'stop';
  }),

  actions: {
    triggerInstanceEvent(event) {
      this.sendAction("triggerInstanceEvent", this.get("instance"), event);
    },

    restore(stackEvent) {
      this.sendAction('restore', stackEvent);
    },
  }

});
