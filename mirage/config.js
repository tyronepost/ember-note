export default function() {

  // users
  this.get('users', (schema) => {
    return schema.users.all();
  });

  this.post('/users');

  // notebooks
  this.get('notebooks', (schema, request) => {
    const id = request.queryParams.user;
    return schema.notebooks.where({ userId: id });
  });

  this.get('notebooks/:id', (schema, request) => {
    const id = request.params.id;
    return schema.notebooks.find(id);
  });

  this.post('/notebooks');

  // notes
  this.get('notes', (schema, request) => {
    const id = request.queryParams.notebook;
    return schema.notes.where({ notebookId: id });
  });

  this.post('/notes');
}
