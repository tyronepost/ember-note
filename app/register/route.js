import Ember from 'ember';
const { Route } = Ember;

export default Route.extend({
  actions: {
    addNew() {
      const { controller } = this;
      const name = controller.get('name');
      let user = this.store.createRecord('user',{ name: name });
      user.save().then(() => {
        console.log('save successful');
        const message = `A new user with the name ${name} was added`;
        controller.set('message', message);
      }, function() {
        console.log('save failed');
      });
   }
  }
});
