  import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('todo-item', 'Integration | Component | todo item', {
  integration: true
});

test('it renders', function(assert) {

  const model = {
    title: 'Bucket List',
    createdBy: 'John Doe'
  };

  this.set('todo', model);
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{todo-item item=todo}}`);

  assert.equal(this.$('p').text().trim(), 'CreatedBy: John Doe');

  // Template block usage:
  this.render(hbs`
    {{#todo-item}}
      template block text
    {{/todo-item}}
  `);

  assert.equal(this.$('.panel-footer').text().trim(), 'template block text');
});
