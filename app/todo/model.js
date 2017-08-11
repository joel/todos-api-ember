import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  title: DS.attr('string'),
  createdBy: DS.attr('string'),
  items: DS.hasMany('item'),

  isValid: Ember.computed.notEmpty('title', 'createdBy')
});
