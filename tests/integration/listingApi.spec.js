import request from 'request';
import { expect } from 'chai';
import app from '../../app';
import getPort from 'get-port';
import bluebird from 'bluebird';

const req = bluebird.promisifyAll(request);
describe('Listing API', () => {
  let baseUrl, server;
  before(async () => {
    const port = await getPort();
    baseUrl = `http://localhost:${port}/v1/listing`;
    server = app.listen(port);
    // console.log(`SERVER STARTING ON PORT ${port}`);
  });

  after(() => {
    // console.log("TERMINATING THE SERVER");
    server.close();
  });

  describe('/GET /v1/listing', () => {
    let result;
    before(async () => {
      result = await req.getAsync(baseUrl);
    });
    it('should return 200 for HTTP Header and return code 200 with message SUCCESS in body', (done) => {
      const body = JSON.parse(result.body);
      expect(result.statusCode).to.equal(200);
      expect(body).to.nested.include({ 'code': 200, 'message': 'SUCCESS' });
      done();
    });
  });

  describe('/GET /v1/listing/:id', () => {
    let result;
    const id = 'lar108011';
    before(async () => {
      result = await req.getAsync(`${baseUrl}/${id}`);
    });

    it('should return 200 for HTTP Header and return code 200 with message SUCCESS in body', (done) => {
      const body = JSON.parse(result.body);
      expect(result.statusCode).to.equal(200);
      expect(body).to.nested.include({ 'code': 200, 'message': 'SUCCESS' });
      done();
    });

    it(`should return listing id with ID: ${id} and the number is one`, (done) => {
      const body = JSON.parse(result.body);
      expect(body).to.nested.include({'data.number': 1, 'data.listing.id': id});
      done();
    });
  });

  // describe("/GET /v1/listing/:id", () => {
  //   it("Should return with the ID", () => {
  //     console.log("EXECUTING", "GET LISTING BY ID");
  //   });
  // });
});
