export default function() {

  // users
  this.get('users', (schema) => {
    return schema.users.all();
  });

  this.post('/users');

  // notebooks
  this.get('notebooks', (schema, request) => {
    const id = request.queryParams.user;
    const user =  schema.users.find(id);
    //return user.notebooks.all();
    return schema.notebooks.where(user);
  });
}
