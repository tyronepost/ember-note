import Ember from 'ember';
const { Route } = Ember;

export default Route.extend({
  model(params) {
    return this.store.findRecord('note', params.note_id);
  },

  actions: {
    close() {
      this.transitionTo('notebooks.notes');
    }
  }
});
