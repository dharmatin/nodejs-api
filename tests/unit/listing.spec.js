import { ListingService } from "../../services/ListingService";
import listingDao from "../../dao/solr/listing";
import chaiAsPromised from "chai-as-promised";
import sinonChai from "sinon-chai";
import chai from "chai";
import sinon from "sinon";

chai.use(chaiAsPromised);
chai.use(sinonChai);
const {expect} = chai;
const sandbox = sinon.createSandbox();

describe("Listing Service", () => {
  describe("#getAllListings", () => {
    const baseResponse = {
      response: {
        numFound: 1,
        docs: [
          {name: 'listing'}
        ]
      },
      responseHeader: {
        status: 0
      }
    }

    afterEach(() => {
      sandbox.restore();
    })

    it('should return all listings get from solr', () => {
      sandbox.stub(listingDao, 'search').callsFake(() => baseResponse);
      const listingService = new ListingService(listingDao);
      const result = listingService.getAllListings();

      return expect(result).to.eventually.deep.equal({
        number: 1,
        listings: [{name: 'listing'}]
      });
    })

    it('should throw error when the solr status is not 0', () => {
      const errorResponse = Object.assign(baseResponse, {responseHeader: {status:1}});
      sandbox.stub(listingDao, 'search').callsFake(() => errorResponse);
      const listingService = new ListingService(listingDao);
      expect(listingService.getAllListings()).to.eventually
      .be.rejectedWith('Solr search error!').and.be.an.instanceOf(Error);
    })
  })
})