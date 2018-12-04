const server = require('./index.js');
const supertest = require('supertest');
const mongoose = require('mongoose');
const request = supertest.agent(server);

afterAll(()=> {
  mongoose.disconnect();
});

describe('server', () => {
  test('it should respond to a GET ', (done) => {
    request.get('/').expect(200, done);
  });
});

