import Component from "@ember/component";
import { inject as service } from "@ember/service";
import { computed, get, set } from "@ember/object";

export default Component.extend({
  session: service(),
  classNames: ["instance-edit"],
  namePrefix: computed("instance.production", function() {
    return get(this, "instance.production") === true
      ? "production"
      : "development";
  }),

  actions: {
    save() {
      this._createName();
      this.sendAction("save");
    },

    toggleActiveImage(image) {
      const instance = get(this, "instance");
      const instanceImage = get(image, "ami");

      set(this, "selectedImage", image);
      set(instance, "imageId", instanceImage);
    },

    toggleActiveType(type) {
      const instance = get(this, "instance");
      const instanceType = get(type, "type");

      set(this, "selectedType", type);
      set(instance, "instanceType", instanceType);
    },

    toggleSecurityGroup(data) {
      const instance = get(this, "instance");
      set(this, "selectedSecurityGroup", data);
      set(instance, "securityGroupId", data.get("groupId"));
    }
  },

  /**
   * Appends the prefix to the name
   *
   * @private
   */
  _createName() {
    const instance = get(this, "instance");
    const prefix = get(this, "namePrefix");
    const name = get(this, "instance.name");
    set(instance, "name", name + "-" + prefix);
  }
});
