import DS from 'ember-data';


export default DS.Model.extend({
  name: DS.attr('string'),
  swordfishCommand: DS.attr("string"),

  ownerId: DS.attr('string'),

  users: DS.hasMany('user'),
});
