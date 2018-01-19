import Solr from "../Solr";

const CORE_LISTING = "listing";

export class Listing extends Solr {

  constructor() {
    super(CORE_LISTING);
  }
  async search(id) {
    const qCondition = id ? `id:${id}`: '*:*';
    const query = this.createQuery().q(qCondition).start(0).rows(10);
    return this.searchAsync(query);
  }
}

export default new Listing();