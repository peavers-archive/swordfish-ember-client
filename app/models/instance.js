import attr from "ember-data/attr";
import Model from "ember-data/model";
import DS from "ember-data";

export default Model.extend({
  name: attr("string"),
  description: attr("string"),
  instanceType: attr("string"),
  imageId: attr("string"),
  keyName: attr("string"),
  keyBlob: attr("string"),
  subnetId: attr("string"),
  instanceId: attr("string"),
  state: attr("string"),
  publicIp: attr("string"),
  privateIp: attr("string"),
  securityGroupId: attr("string"),
  production: attr("boolean"),
  staticIp: attr("boolean"),
  created: attr("date"),
  swordfishCommand: attr("string"),
  userId: attr("string"),
  userName: attr("string"),
  userPicture: attr("string"),
  securityGroups: DS.hasMany("security-group")
});
