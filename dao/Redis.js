import bluebird from 'bluebird';
import redis from 'redis';
import config from './RedisConfig.json';

export default class Redis {
  constructor () {
    this.client = bluebird.promisifyAll(redis.createClient(config[process.env.NODE_ENV]));
  }
}
