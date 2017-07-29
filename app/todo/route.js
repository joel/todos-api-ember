import Ember from 'ember';
import RSVP from 'rsvp';

export default Ember.Route.extend({
  model(params) {
    return RSVP.hash({
      todo: this.get('store').findRecord('todo', params.todo_id)
    });
  }
});
