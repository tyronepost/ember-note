import Ember from 'ember';
import ValidationFunctions from 'ember-note/mixins/validation-functions';
const { Route } = Ember;

export default Route.extend(ValidationFunctions, {
  model(params) {
    return this.store.query('note', { notebook:params.notebook_id });
  },

  actions: {
    addNote() {
      let title = this.controller.get('title');
      let validLength = this.isValidLength(title, 0, 140);
      if (!validLength) {
        alert('Title must be longer than 0 characters and not more than 140');
      } else {
        const notebookId = this.paramsFor('notebooks.notes').notebook_id;
        this.store.findRecord('notebook', notebookId)
          .then((notebook) => {
            console.log(notebook);
            let title = this.controller.get('title');
            let note = this.store.createRecord('note', { 
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
      }
    },

    deleteNote(note) {
      let title = note.get('title');
      console.log(`deleting note with title ${title}`);
      note.deleteRecord();
      note.save();
    }
  }
});
