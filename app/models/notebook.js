import DS from 'ember-data';

const {
  attr,
  belongsTo,
  hasMany,
  Model
} = DS;

export default Model.extend({
  title: attr('string'),
  user: belongsTo('user'),
  notes: hasMany('note')
});
