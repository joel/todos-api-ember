import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    let todo = this.modelFor('todo');
    return this.store.createRecord('item', {todo: todo});
  }
});
