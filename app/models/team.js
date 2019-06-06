import attr from "ember-data/attr";
import { belongsTo, hasMany } from "ember-data/relationships";
import Base from "swordfish-ember-client/models/_swordfish-base";

export default Base.extend({
  name: attr("string"),
  owner: attr("string"),

  users: hasMany("user")
});
