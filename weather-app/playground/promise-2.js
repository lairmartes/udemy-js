const request = require('request');

var geocodeAddress = (providedAddress) => {

    return new Promise((resolve, reject) => {
        var encodedAddress = encodeURIComponent(providedAddress);
        var callingUrl = `http://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`;

        request({
            url: callingUrl,
            json: true
        }, (error, response, body) => {
            if (error) {
                reject('Unable to connect Google servers.');
            } else if (body.status == 'ZERO_RESULTS') {
                reject('Unable to find that address.');
            } else if (body.status == 'INVALID_REQUEST') {
                reject(body.error_message);
            } else if (body.status == 'OK') {
                resolve({
                    address: body.results[0].formatted_address,
                    latitude: body.results[0].geometry.location.lat,
                    longitude: body.results[0].geometry.location.lng
                });
            }
        });
    });
};

geocodeAddress('000000').then((location) => {
    console.log(JSON.stringify(location, undefined, 2));
}, (errorMessage) => {
    console.log(errorMessage);
});