const URL_BACKEND_TOP = window.location.hostname.includes('localhost')
  ? 'https://gotflix.herokuapp.com'
  : 'http://localhost:8080';

export default {
  URL_BACKEND_TOP,
};