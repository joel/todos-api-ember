import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('todo-item-form', 'Integration | Component | todo item form', {
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

  this.render(hbs`{{todo-item-form item=todo}}`);

  assert.equal(this.$('.form-control').text().trim(), '');
  // assert.equal(this.$("input[@placeholder='Who's created the Todo List']").text().trim(), '');

  // assert.equal(this.$("//input[@value = 'Bucket List']").text().trim(), '');
  // assert.equal(this.$("//input[@type='text'][0]").text().trim(), '');
  // <span class="glyphicon glyphicon-ok form-control-feedback"></span>
  // <input type="text" placeholder="The title of the Todo List" id="ember398" class="form-control ember-text-field ember-view">
  // //*[@id="ember398"]
  // #ember398
  //*[@id="ember393"]/div/div[1]/div

});
