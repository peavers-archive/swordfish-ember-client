/** @format */

import Controller from "@ember/controller";
import { get, set } from "@ember/object";

export default Controller.extend({
  actions: {
    save(team) {
      let user = get(this, "user");

      set(user, "teamId", get(team, "id"));
      set(user, "swordfishCommand", "update");
      user.save();

      get(team, "users")
        .then(users => {
          users.pushObject(user);
        })
        .then(() => {
          team.save().catch(() => {
            //Ignored
          });
        });
    }
  }
});
