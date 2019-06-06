import Component from "@ember/component";

export default Component.extend({
  classNames: ["column is-4"],

  actions: {
    join(team) {
      this.sendAction("join", team);
    }
  }
});
