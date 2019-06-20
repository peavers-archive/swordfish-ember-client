/** @format */

import Route from "@ember/routing/route";
import RSVP from "rsvp";
import AuthenticatedRouteMixin from "ember-simple-auth/mixins/authenticated-route-mixin";
import { get, set } from "@ember/object";
import { inject as service } from "@ember/service";

export default Route.extend(AuthenticatedRouteMixin, {
  session: service(),

  model() {
    return RSVP.hash({
      user: get(this, "store").findRecord(
        "user",
        get(this, "session.data.authenticated.profile.sub")
      ),
      team: get(this, "store").createRecord("team", {
        swordfishCommand: "create",
        owner: get(this, "session.data.authenticated.profile.sub")
      })
    });
  },

  setupController(controller, models) {
    controller.setProperties(models);
  },

  actions: {
    willTransition() {
      this._super(...arguments);
      this.controller.get("team").rollbackAttributes();
    },

    save(data) {
      let user = this.controller.get("user");

      set(user, "teamId", get(data, "id"));
      set(user, "swordfishCommand", "update");
      user.save();

      get(data, "users")
        .then(users => {
          users.pushObject(user);
        })
        .then(() => {
          data.save().catch(() => {
            //Ignored
          });
        });
    }
  }
});
