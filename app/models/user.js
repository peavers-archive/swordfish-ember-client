import attr from "ember-data/attr";
import Model from "ember-data/model";
import DS from 'ember-data';


export default Model.extend({
  team: DS.belongsTo('team'),

  swordfishCommand: attr("string"),

  awsKey: attr('string'),
  awsSecret: attr('string'),
  awsRegion: attr('string'),

  gitlabUsername: attr('string'),
  gitlabPassword: attr('string'),

  silverstripeUsername: attr('string'),
  silverstripeToken: attr('string')
});
