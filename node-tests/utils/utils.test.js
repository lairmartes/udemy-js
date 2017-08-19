const expect = require('expect');

const utils = require('./utils');

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

/* it('should expect some values', () => {
    //expect(12).toNotBe(12);
    //expect({ name: 'lair' }).toNotEqual({ name: 'Lair' });
    //expect([2, 3, 4]).toExclude(1);
    expect({
        name: 'Lair',
        age: 44,
        location: 'São Paulo'
    }).toInclude({
        age: 44
    });
}); */