import Ember from 'ember';
const { Service, set } = Ember;

export default Service.extend({
  user: null,

  set(user) {
    set(this, 'user', user);
  }
});
