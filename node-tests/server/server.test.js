const request = require('supertest');
const expect = require('expect');

var app = require('./server').app;

it('should return hello world test response', (done) => {
    request(app)
        .get('/')
        .expect(404)
        .expect((res) => {
            expect(res.body).toInclude({
                error: 'Page not found.'
            });
        })
        .end(done);
});

// Make a new test
// assert 200
// Assert that you exists in users array

it('should include user Lair', (done) => {
    request(app)
        .get('/users')
        .expect(200)
        .expect((res) => {
            expect(res.body).toInclude({
                name: 'Lair',
                age: 44
            });
        }).end(done);
});