import attr from "ember-data/attr";
import {belongsTo, hasMany} from "ember-data/relationships";
import Base from "swordfish-ember-client/models/_swordfish-base"

export default Base.extend({
  awsKey: attr('string'),
  awsSecret: attr('string'),
  awsRegion: attr('string'),
  gitlabUsername: attr('string'),
  gitlabPassword: attr('string'),
  silverstripeUsername: attr('string'),
  silverstripeToken: attr('string'),

  team: belongsTo('team')
});
