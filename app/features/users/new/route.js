/** @format */

import Route from "@ember/routing/route";
import RSVP from "rsvp";
import { get } from "@ember/object";
import { inject as service } from "@ember/service";

export default Route.extend({
  session: service(),

  model() {
    return RSVP.hash({
      user: get(this, "store").findRecord(
        "user",
        get(this, "session.data.authenticated.profile.sub")
      )
    });
  },

  setupController(controller, models) {
    controller.setProperties(models);
  },

  actions: {}
});
