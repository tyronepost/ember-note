import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    login() {
      const { controller } = this;
      const name = controller.get('name');
      this.store.query('user', { name: name }).then((users) => {
        if (users.get('length') === 1) {
          let user = users.objectAt(0);
          this.controllerFor('application').set('user', user);
          this.transitionTo('notebooks');
        } else {
          console.log('unexpected query result');
        }
      });
    }
  }
});
