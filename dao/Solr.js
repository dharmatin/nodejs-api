import solr from 'solr-client';
import config from './SolrConfig.json';
import bluebird from 'bluebird';

export default class SolrClient {
  constructor (core) {
    this.client = bluebird.promisifyAll(solr.createClient({
      host: config[process.env.NODE_ENV].host,
      port: config[process.env.NODE_ENV].port,
      path: config[process.env.NODE_ENV].path,
      core: core
    }));
  }

  createQuery () {
    return this.client.createQuery();
  }

  searchAsync (query) {
    return this.client.searchAsync(query);
  }
}
