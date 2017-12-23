import attr from "ember-data/attr";
import Model from "ember-data/model";

export default Model.extend({

  name: attr('string'),
  title: attr('string'),
  created: attr('date'),

  swordfishCommand: attr("string")
});
