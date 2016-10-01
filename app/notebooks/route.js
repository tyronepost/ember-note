import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    const { store } = this;
    const id = params.user_id;
    return store.query('notebook', { user: id });
  },

  actions: {
  }
});
