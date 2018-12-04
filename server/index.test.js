const server = require('./index.js');
const supertest = require('supertest');
const request = supertest.agent(server);

describe('server', () => {
  test('it should respond to a GET ', (done) => {
    request.get('/').expect(200, done);
  });
});

