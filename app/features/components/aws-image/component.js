/** @format */

import { computed, get } from "@ember/object";
import Component from "@ember/component";

export default Component.extend({
  tagName: "div",
  classNames: ["image-item column is-2"],
  classNameBindings: ["selected"],

  selected: computed("selectedImage", function() {
    return get(this, "selectedImage.title") === get(this, "title");
  }),

  actions: {
    toggleActiveImage() {
      this.sendAction("toggleActiveImage", this);
    }
  }
});
