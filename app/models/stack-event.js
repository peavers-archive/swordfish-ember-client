import attr from "ember-data/attr";
import Model from "ember-data/model";

export default Model.extend({
  instanceId: attr('string'),
  projectId: attr('string'),
  mode: attr('string'),
  environment: attr('string'),
});
