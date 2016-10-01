import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    login() {
      const {
        controller, controllerFor, transitionTo
      } = this;
      const name = controller.get('name');
      this.store.query('user', { name: name }).then((users) => {
        if (users.get('length') === 1) {
          controllerFor('application').set('user', user);
          transitionTo('notebooks');
        } else {
          console.log('unexpected query result');
        }
      });
    }
  }
});
