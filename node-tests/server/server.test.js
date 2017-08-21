const request = require('supertest');
const expect = require('expect');

var app = require('./server').app;

describe('Server', () => {

    describe('GET /', () => {
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
    });

    describe('GET /users', () => {

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
    });
});