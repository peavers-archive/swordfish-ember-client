import Component from '@ember/component';
import {get} from '@ember/object';
import Auth0 from 'auth0';

export default Component.extend({

    didRender() {

    },

    actions: {
      saveAws() {
        const user = get(this, 'user');

        this.sendAction('saveAws', user);
      }
    }
  }
);
