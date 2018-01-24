import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
import redisDao from '../../dao/redis/NewProperty';

chai.use(chaiAsPromised);

const { expect } = chai;

describe('New Property Redis Dao', () => {
  describe('#getHomepage', () => {
    it('Should be return data', () => {
      const result = redisDao.getHomepage();
      return expect(result).eventually.to.be.an('array');
    });
  });
});
