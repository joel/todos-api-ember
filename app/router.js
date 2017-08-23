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
    this.route('show', { path: '/:todo_id' }, function() {
      this.route('items', function() {
        this.route('new', { path: '/new'} )
      });
    });
    
  });
});

export default Router;
