import { test } from 'qunit';
import moduleForAcceptance from 'ember-note/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | register');

test('visiting /register', function(assert) {
  visit('/');

  click('.register');

  andThen(function() {
    assert.equal(currentURL(), '/register');
  });

  fillIn('.name', 'obiwan@kenobi.org');
  click('.add');

  andThen(function() {
    const expected = 'A new user with the name obiwan@kenobi.org was added';
    assert.equal(find('.message').text().trim(), expected);
  });
});
