import attr from "ember-data/attr";
import Model from "ember-data/model";

export default Model.extend({
  groupName: attr('string'),
  groupId: attr('string'),
  description: attr('string'),
  ipPermissions: attr('string'),
  ipPermissionsEgress: attr('string'),
  vpcId: attr('string'),

});
