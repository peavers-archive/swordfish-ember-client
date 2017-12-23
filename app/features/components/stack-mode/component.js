import { computed, get } from '@ember/object';
import Component from '@ember/component';

export default Component.extend({
  tagName: 'div',
  classNameBindings: ['selected'],

  selected: computed('selectedMode', function () {
    return get(this, 'selectedMode.title') === get(this, 'title');
  }),

  actions: {
    toggleActiveMode() {
      this.sendAction('toggleActiveMode', this);
    },
  }

});
