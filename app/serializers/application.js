import Ember from 'ember';
import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
  // keyForAttribute(attr) {
  //   return Ember.String.underscore(attr);
  // },

  serialize(snapshot, options) {
    let json = this._super(...arguments);

    // const util = require('util')
    // console.log("JSON ATTRIBUTES : " + util.inspect(json))

    // ,

    console.log("JSON ATTRIBUTES : " + (JSON.stringify(json, null, 4)));

    return json;
  },
});
