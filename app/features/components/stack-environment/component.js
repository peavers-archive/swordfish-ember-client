import { computed, get } from '@ember/object';
import Component from '@ember/component';

export default Component.extend({
  tagName: 'div',
  classNameBindings: ['selected'],

  selected: computed('selectedEnvironment', function () {
    return get(this, 'selectedEnvironment.title') === get(this, 'title');
  }),

  actions: {
    toggleActiveEnvironment() {
      this.sendAction('toggleActiveEnvironment', this);
    },
  }

});
