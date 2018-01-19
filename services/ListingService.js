import BaseService from "./BaseService";
import ListingModel from "../dao/solr/listing";

export class ListingService extends BaseService {

  constructor(listingModel) {
    super();
    this.listingModel = listingModel;
  }
  async getAllListings() {
    const listingCollection = await this.listingModel.search();
    const slorStatus = listingCollection.responseHeader.status;
    if (slorStatus !== 0) {
      throw new Error('Solr search error!');
    }
    return {
      number: listingCollection.response.numFound,
      listings: listingCollection.response.docs
    };
  }

  async getListingById(id) {
    const listingCollection = await this.listingModel.search(id);
    const slorStatus = listingCollection.responseHeader.status;
    
    if (slorStatus !== 0)
      throw new Error('Solr Search Error!');
    
    return {
      number: 1,
      listing: listingCollection.response.docs[0]
    }
  }
}

export default new ListingService(ListingModel);