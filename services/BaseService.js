import config from '../common/config.json';

export default class BaseService {
  constructor () {
    this.commonConfig = config[process.env.NODE_ENV];
  }
}
