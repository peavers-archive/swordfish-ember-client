import Component from '@ember/component';
import {get} from '@ember/object';

export default Component.extend({
    actions: {
      savePicture() {
        const user = get(this, 'user');

        this.sendAction('savePicture', user);
      }
    }
  }
);
