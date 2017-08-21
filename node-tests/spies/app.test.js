const expect = require('expect');
const rewire = require('rewire');

var app = rewire('./app');


describe('App', () => {
    var db = {
        saveUser: expect.createSpy()
    };

    app.__set__('db', db);

    it('should call the spy correctly', () => {
        var spy = expect.createSpy();
        spy('Lair', 44);
        expect(spy).toHaveBeenCalledWith('Lair', 44);
    })

    it('should call saveUser with object', () => {
        var email = 'lairmartes@gmail.com'
        var password = '123abc';

        app.handleSignup(email, password);
        expect(db.saveUser).toHaveBeenCalledWith({ email, password });
    });
});