import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    login() {
      const { controller, store } = this;
      const name = controller.get('name');
      const user = { name: name };
      store.query('user', user)
        .then((users) => {
          if (users.get('length') === 1) {
            let user = users.objectAt(0);
            this._setUserSession.call(this, user);
          } else {
            console.log('unexpected query result');
          }
      });
    }
  },

  _setUserSession(user) {
    this.controllerFor('application').set('user', user);
    this.transitionTo('notebooks');
  }
});
