import RESTAdapter from '@ember-data/adapter/rest';

export default class ApplicationAdapter extends RESTAdapter {
  namespace = 'api';
  buildURL(...args) {
    /* By default, buildURL() pluralizes the type's name 
    (for example, 'product' becomes 'products' and 'person' becomes 'people'). 
    To override the pluralization see pathForType.*/
    return `${super.buildURL(...args)}.json`;
  }
}
