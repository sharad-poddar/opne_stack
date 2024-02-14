const mongoose = require('mongoose')
const supertest = require('supertest')
const {app} = require('../app.js')

// superagent object, which is used to make an api call
const api = supertest(app)

// expected that content is in json form
// .expect() contains regex , regex starts and end with /
// her we get / in middle to not count it as regx we use \
// we can use simple string a there but the value of header must exactly same
// so that why we use regex

console.log('we are ready for testing...')
test('notes are returned as json', async () => {
    await api
      .get('/')
      .expect(200)
      .expect('Content-Type', /application\/json/)
})

// after everythig it run
afterAll(async () => {
    await mongoose.connection.close()
})  