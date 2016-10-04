import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.query('note', { notebook:params.notebook_id });
  },

  actions: {
    addNote() {
      const notebookId = this.paramsFor('notebooks.notes').notebook_id;
      this.store.findRecord('notebook', notebookId)
        .then((notebook) => {
          console.log(notebook);
          let title = this.controller.get('title');
          let note = this.store.createRecord({ 
            title: title, 
            notebook: notebook
          });
          console.log(note);
          note.save().then(() => {
            console.log('save result');
            this.controller.set('title', null);
            this.refresh();
          }, function() {
            console.log('save failed');
          });
        });
    },

    deleteNote(note) {
      let title = note.get('title');
      console.log(`deleting note with title ${title}`);
      note.deleteRecord();
      note.save();
    }
  }
});
