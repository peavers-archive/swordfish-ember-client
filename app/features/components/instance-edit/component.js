import Component from '@ember/component';
import {inject as service} from '@ember/service';
import {get, set} from '@ember/object';

export default Component.extend({
  session: service(),
  classNames: ['instance-edit'],

  actions: {

    save() {
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

});
