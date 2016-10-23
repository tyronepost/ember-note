import Ember from 'ember';
const { Route } = Ember;

export default Route.extend({

  model(params) {
    const { store } = this;
    const id = params.user_id;
    return store.query('notebook', { user: id });
  },

  actions: {
    addNotebook() {
      const title = this.controller.get('title');
      const user = this.session.user;
      const obj = { title: title, user: user };
      const notebook = this.store.createRecord('notebook', obj);
      notebook.save().then(() => {
        this.logger.log('save successful');
        this.controller.set('title', null);
        this.refresh();
      }, function() {
        this.logger.log('save failed');
      });
    }
  }
});
