import { test } from 'qunit';
import moduleForAcceptance from 'ember-note/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | add notebook');

test('visiting /add-notebook', function(assert) {
  visit('/');
  click('.register');
  fillIn('.name', 'obiwan@kenobi.org');
  click('.add');
  click('.login');
  fillIn('.name', 'obiwan@kenobi.org');
  click('.login_btn');
  fillIn('.title', 'notebook1');
  click('.add-notebook');

  andThen(function() {
    assert.equal(find("[data-test-id=1]").text().trim(), 'notebook1');
  });
});
