import attr from "ember-data/attr";
import Model from "ember-data/model";

export default Model.extend({
  awsKey: attr('string'),
  awsSecret: attr('string'),
  awsRegion: attr('string'),

  gitlabUsername: attr('string'),
  gitlabPassword: attr('string'),

  silverstripeUsername: attr('string'),
  silverstripeToken: attr('string')
});
