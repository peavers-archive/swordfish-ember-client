/** @format */

import Component from "@ember/component";
import { get, set } from "@ember/object";
import Ember from "ember";

export default Component.extend({
  tagName: "",

  actions: {
    triggerRestoreEvent(projectId, mode, environment) {
      const stackEvent = this.get("stackEvent");

      Ember.$(`#${projectId}`)
        .addClass("is-restoring-queued")
        .removeClass("is-restoring-done is-restoring");

      set(stackEvent, "instanceId", get(this, "instanceId"));
      set(stackEvent, "projectId", projectId);
      set(stackEvent, "mode", mode);
      set(stackEvent, "environment", environment);

      this.sendAction("triggerRestoreEvent", stackEvent);
    }
  }
});
