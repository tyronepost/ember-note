import { test } from 'qunit';
import moduleForAcceptance from 'ember-note/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | note');

test('visiting /note', function(assert) {
  visit('/');
  click('.register');
  fillIn('.name', 'tyrone');
  click('.add');
  click('.login');
  fillIn('.name', 'tyrone');
  click('.login_btn');
  fillIn('.title', 'notebook 1');
  click('.add-notebook');
  click('[data-test-id=1]');
  fillIn('.title', 'note 1');
  click('.add-note');
  click('[data-test-note=1]');

  andThen(function() {
    assert.equal(currentURL(), '/notebooks/1/notes/1/note/1');
  });
});
