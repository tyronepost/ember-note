export function initialize(application) {
  application.inject('route', 'logger', 'service:logger');
}

export default {
  name: 'logger',
  initialize
};
