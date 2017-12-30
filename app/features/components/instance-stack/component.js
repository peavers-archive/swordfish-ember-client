import Component from '@ember/component';
import {get, set} from '@ember/object';

export default Component.extend({

  tagName: "",

  actions: {
    triggerRestoreEvent(projectId, mode, environment) {
      set(this.get('stackEvent'), 'instanceId', get(this, "instanceId"));
      set(this.get('stackEvent'), 'projectId', projectId);
      set(this.get('stackEvent'), 'mode', mode);
      set(this.get('stackEvent'), 'environment', environment);

      this.sendAction('restore', get(this, 'stackEvent'));
    },
  }

});
