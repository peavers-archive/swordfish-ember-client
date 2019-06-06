import Component from "@ember/component";

export default Component.extend({
  actions: {
    save(team) {
      this.sendAction("save", team);
    }
  }
});
