import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('about');

  this.route('todos', function() {
    this.route('new');
    this.route('edit', { path: '/:todo_id/edit' });
  });
  this.route('todo', { path: '/todos/:todo_id' });
});

export default Router;
