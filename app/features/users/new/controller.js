/** @format */

import Controller from "@ember/controller";
import { inject as service } from "@ember/service";
import { get } from "@ember/object";

export default Controller.extend({
  session: service(),

  PUSHER_SUBSCRIPTIONS: {
    server_refresh: ["server_refresh"]
  },

  actions: {
    serverRefresh(data) {
      get(this, "store").pushPayload(JSON.parse(data));
    }
  }
});
