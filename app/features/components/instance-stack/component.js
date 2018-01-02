import Component from '@ember/component';
import {get, set} from '@ember/object';
import Ember from "ember";

export default Component.extend({

  tagName: "",

  actions: {
    triggerRestoreEvent(projectId, mode, environment) {
      Ember.$(`#${projectId}`).addClass('is-restoring-queued').removeClass('is-restoring-done is-restoring');

      set(this.get('stackEvent'), 'instanceId', get(this, "instanceId"));
      set(this.get('stackEvent'), 'projectId', projectId);
      set(this.get('stackEvent'), 'mode', mode);
      set(this.get('stackEvent'), 'environment', environment);

      this.sendAction('restore', get(this, 'stackEvent'));
    },
  }

});
