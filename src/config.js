const ENV = process.env.NODE_ENV || 'development';
const PROD_URL = '';
const TEST_URL = 'https://jsonplaceholder.typicode.com';
const DEV_URL = 'http://localhost:3000';

/**
* Function for returning the url prefix based on the environment
* @method getUrlPrefix
*/
function getUrlPrefix() {
  return ENV === 'production' ? PROD_URL : DEV_URL;
}

const config = {
  endpoint: getUrlPrefix()
};

/* Configuration exposed for the application */
export default config;
