import attr from "ember-data/attr";
import Model from "ember-data/model";

export default Model.extend({
  gitlabUsername: attr('string'),
  gitlabPassword: attr('string'),

  awsKey: attr('string'),
  awsSecret: attr('string'),
  awsRegion: attr('string'),
});
