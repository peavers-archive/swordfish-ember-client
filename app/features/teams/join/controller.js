import Controller from '@ember/controller';

export default Controller.extend({

  actions: {
    joinTeam(team) {
      const user = this.get('user');

      user.set('team', team);
      user.set('swordfishCommand', 'update');
      user.save();
    }
  }
});
