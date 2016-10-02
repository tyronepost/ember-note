import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    const { store } = this;
    const id = params.user_id;
    console.log(id);
    return store.query('notebook', { user: id });
  },

  actions: {
    addNotebook() {
      const title = this.controller.get('title');
      const user = this.controllerFor('application').get('user');
      const obj = { title: title, user: user };
      const notebook = this.store.createRecord('notebook', obj);
      notebook.save().then(() => {
        console.log('save successful');
        this.controller.set('title', null);
        this.refresh();
      }, function() {
        console.log('save failed');
      });
    }
  }
});
