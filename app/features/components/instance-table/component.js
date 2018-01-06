import {inject as service} from '@ember/service';
import Component from '@ember/component';
import {computed} from '@ember/object';

export default Component.extend({
  session: service(),
  belongsToUser: true,

  filteredInstances: computed('instances.@each', 'belongsToUser', function () {
    let belongsToUser = this.get('belongsToUser');

    if (belongsToUser) {
      const instances = this.get('instances').filterBy('userId', this.get('session.data.authenticated.profile.sub'));
      return instances.length === 0 ? false : instances;
    } else {
      return this.get('instances');
    }

  }),

  actions: {
    triggerInstanceEvent(instance) {
      this.sendAction("triggerInstanceEvent", instance);
    },

    triggerBelongsToUser() {
      this.toggleProperty('belongsToUser');
    },

    triggerRefreshAll() {
      this.sendAction("triggerRefreshAll");
    }
  }

});
