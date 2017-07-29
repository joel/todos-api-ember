import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return this.store.createRecord('todo');
  },

  actions: {

    saveTodo(newTodo) {
      newTodo.save().then(() => this.transitionTo('todos'));
    },

    willTransition() {
      let model = this.controller.get('model');

      if (model.get('isNew')) {
        model.destroyRecord();
      }
    }
  }
});
