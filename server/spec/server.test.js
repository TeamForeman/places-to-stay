const request = require('request');

describe('GET request for users and listings', () => {
  var options = {
    method: 'GET',
    uri: 'http://localhost:3004/api/more/listings/100'
  };
  var badOptions = {
    method: 'GET',
    uri: 'http://localhost:3004/api/more/listings/101'
  };

  it('should respond with 200 for a listing that exists', (done) => {
    request(options, (error, response, body) => {
      body = JSON.parse(body);
      expect(response.statusCode).toBe(200);
      done();
    });
  });

  it('should respond with an object with a matching id', (done) => {
    request(options, (error, resopnse, body) => {
      body = JSON.parse(body);
      expect(body.lId).toBe(100);
      done();
    });
  });

  it('should respond with an object with 12 related listings', (done) => {
    request(options, (error, response, body) => {
      body = JSON.parse(body);
      expect(body.relatedListings.length).toBe(12);
      done();
    });
  });

  it('should respond with 404 for a listing that doesn\'t exist', (done) => {
    request(badOptions, (error, response, body) => {
      expect(response.statusCode).toBe(404);
      done();
    });
  });
});