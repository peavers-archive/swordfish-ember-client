import attr from "ember-data/attr";
import { belongsTo, hasMany } from "ember-data/relationships";
import Base from "swordfish-ember-client/models/_swordfish-base";

export default Base.extend({
  email: attr("string"),
  familyName: attr("string"),
  givenName: attr("string"),
  nickName: attr("string"),
  name: attr("string"),
  picture: attr("string"),
  username: attr("string"),

  awsKey: attr("string"),
  awsSecret: attr("string"),
  awsRegion: attr("string"),
  gitlabUsername: attr("string"),
  gitlabPassword: attr("string"),
  silverstripeUsername: attr("string"),
  silverstripeToken: attr("string"),

  teamId: attr("string"),
  teamState: attr("string", { default: "pending" })
});
