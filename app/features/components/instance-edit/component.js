import Component from '@ember/component';
import {inject as service} from '@ember/service';
import {computed, get, set} from '@ember/object';

export default Component.extend({
  session: service(),
  classNames: ['instance-edit'],

  namePrefix: computed('instance.production', function () {
    if (get(this, 'instance.production') === true) {
      return "production";
    } else {
      return "development"
    }
  }),

  actions: {
    save() {
      this._buildName();

      this.sendAction('save');
    },

    toggleActiveImage(image) {
      const instance = get(this, 'instance');
      const instanceImage = get(image, 'ami');

      set(this, 'selectedImage', image);
      set(instance, 'imageId', instanceImage);
    },

    toggleActiveType(type) {
      const instance = get(this, 'instance');
      const instanceType = get(type, 'type');

      set(this, 'selectedType', type);
      set(instance, 'instanceType', instanceType);
    },
  },

  /**
   * Appends the prefix to the name
   *
   * @private
   */
  _buildName() {
    const instance = get(this, 'instance');
    const prefix = get(this, 'namePrefix');
    const name = get(this, 'instance.name');
    set(instance, 'name', name + "-" + prefix);
  }

});
