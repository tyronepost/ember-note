import Ember from 'ember';
const { Component, get } = Ember;

export default Component.extend({
  tagName: "span",

  actions: {
    saveNote() {
      get(this, 'note').save();
    },

    closeNote() {
      this.sendAction('close');
    }
  }
});
