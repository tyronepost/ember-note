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

  this.post('/notebooks');
}
