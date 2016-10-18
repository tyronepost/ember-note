import Ember from 'ember';
const { Mixin } = Ember;

export default Mixin.create({
  isValidLength(value, min, max) {
    return !(value === undefined || value.length <= min || value.length > max);
  },
  
  isValidEmail(value) {
    let pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return value.match(pattern);
  }
});
