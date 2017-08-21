const expect = require('expect');

const utils = require('./utils');

describe('Utils', () => {

    describe('#add', () => {
        it('should add two numbers', () => {
            var res = utils.add(33, 11);

            expect(res).toBe(44).toBeA('number');
        });

        it('shoud async add two numbers', (done) => {
            utils.asyncAdd(4, 3, (res) => {
                expect(res).toBe(7).toBeA('number');
                done();
            });
        });
    });

    describe('#square', () => {
        it('should square a number', () => {
            var res = utils.square(5);

            expect(res).toBe(25).toBeA('number');
        });

        it('should async square a number', (done) => {
            utils.asyncSquare(3, (res) => {
                expect(res).toBe(9).toBeA('number');
                done();
            });
        });
    });

    describe('#JSON objects', () => {
        //shoud verify first and last names are set
        // asset it includes firstName and lastName with proper values

        it('should set first and last names', () => {
            var user = { location: 'São Paulo', age: 44 };

            var res = utils.setName(user, 'Lair Martes');

            expect(res).toInclude({
                firstName: 'Lair',
                lastName: 'Martes'
            });
        });
    });
});        }).toInclude({
            age: 44
        });
    }); */
});