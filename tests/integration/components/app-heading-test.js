import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('app-heading', 'Integration | Component | app heading', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{app-heading}}`);
  assert.ok(true);
});
