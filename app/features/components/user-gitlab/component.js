import Component from '@ember/component';
import {get} from '@ember/object';

export default Component.extend({

    actions: {
      saveGitlab() {
        const user = get(this, 'user');

        this.sendAction('saveGitlab', user);
      }
    }
  }
);
