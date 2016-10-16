import isValidLength from 'ember-note/utils/is-valid-length';
import { module, test } from 'qunit';

module('Unit | Utility | is valid length');

// Replace this with your real tests.
test('it works', function(assert) {
  let result = isValidLength('abcdefg', 0, 10);
  assert.ok(result);
});
