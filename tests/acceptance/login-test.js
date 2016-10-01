import { test } from 'qunit';
import moduleForAcceptance from 'ember-note/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | login');

test('register and login', function(assert) {
  visit('/');
  click('.register');
  fillIn('.name', 'sherri');
  click('.add');
  click('.login');
  andThen(function() {
    assert.equal(currentURL(), '/login');
  });

  fillIn('.name', 'sherri');
  click('.login_btn');

  andThen(function() {
    const expected = 'Hello, sherri';
    assert.equal(find('.greeting').text().trim(), expected);
  });
});
