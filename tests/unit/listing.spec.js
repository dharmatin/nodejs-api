import listingService from "../../services/ListingService";
import listingDao from "../../dao/solr/listing";
import chaiAsPromised from "chai-as-promised";
import chai from "chai";

chai.use(chaiAsPromised);
const {expect} = chai;

// describe("Listing Service", () => {
//   describe("#getAllListings", () => {
//     it("Should be return object and get writeLog is true", () => {
//       expect(listingService.getAllListings()).to.be.an("object");
//     })        
//   });
// })


describe("Listing DAO", () => {
  describe("#all", () => {
    it("Should be return all listing from solr", () => {
      const result = listingDao.search();
      expect(result).to.eventually.have.property("responseHeader").and.to.have.property("status").eventually.equal(0);
    });

    it("Should be rejected if the status header not equal 0", () => {
      const result = listingDao.search();
      expect(result).to.eventually.have.property("responseHeader").and.to.have.property("status").equal(0).to.be.rejected;
    })
  })
})