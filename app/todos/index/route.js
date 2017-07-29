import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('todo');
  },

  actions: {

    deleteTodo(todo) {
      let confirmation = confirm('Are you sure?');

      if (confirmation) {
        todo.destroyRecord();
      }
    }
  }
});
