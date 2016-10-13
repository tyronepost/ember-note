import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('edit-note', 'Integration | Component | edit note', {
  integration: true
});

test('it renders', function(assert) {
  this.set('model', { title: 'note 1'});
  this.render(
    hbs`{{#edit-note note=model}}
          Notebook: Notebook 1
        {{/edit-note}}`
  );

  let textareas = this.$('textarea');
  assert.equal(textareas.length, 1);
  assert.equal(this.$('input').val(), 'note 1');
});
