import Component from '@ember/component';
import {get} from '@ember/object';

export default Component.extend({

    actions: {
      saveAws() {
        const user = get(this, 'user');

        this.sendAction('saveAws', user);
      }
    }
  }
);
