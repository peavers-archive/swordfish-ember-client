import Route from "@ember/routing/route";
import RSVP from "rsvp";
import AuthenticatedRouteMixin from "ember-simple-auth/mixins/authenticated-route-mixin";
import { get } from "@ember/object";
import { inject as service } from "@ember/service";

export default Route.extend(AuthenticatedRouteMixin, {
  session: service(),

  model(params) {
    return RSVP.hash({
      team: get(this, "store").findRecord("team", params.team_id)
    });
  },

  setupController(controller, models) {
    controller.setProperties(models);
  },

  actions: {
    delete(team) {
      team.destroyRecord().catch(() => {
        this.transitionTo("teams");
      });
    }
  }
});
