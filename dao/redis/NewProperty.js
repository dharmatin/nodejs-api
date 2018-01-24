import Redis from '../Redis';

export class NewProperty extends Redis {
  constructor () {
    super();
    this.client.selectAsync(3);
  }

  async getHomepage () {
    // console.log('CLIENT', this.client);
    const result = await this.client.getAsync('homepage_new_property_1');
    this.client.quit();
    return JSON.parse(result);
  }
}

export default new NewProperty();
