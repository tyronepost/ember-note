import Ember from 'ember';
import ValidationFunctions from 'ember-note/mixins/validation-functions';
const { Route } = Ember;

export default Route.extend(ValidationFunctions, {
  actions: {
    addNew() {
      const { controller } = this;
      const name = controller.get('name');
      if (this.isValidEmail(name)) {
        let user = this.store.createRecord('user',{ name: name });
        user.save().then(() => {
          console.log('save successful');
          const message = `A new user with the name ${name} was added`;
          controller.set('message', message);
        }, function() {
          console.log('save failed');
        });
      } else {
        alert('invalid email address.');
      }
    }
  }
});
