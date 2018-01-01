import attr from "ember-data/attr";
import Model from "ember-data/model";

export default Model.extend({
  picture: attr('string'),
  gitlabUsername: attr('string'),
  gitlabPassword: attr('string'),
});