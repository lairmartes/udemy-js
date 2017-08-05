const request = require('request');
const fahrenheitToCelsius = require('fahrenheit-to-celsius');

var getWeather = (latitude, longitude, callback) => {

    request({
        //my user key: c437967f1668becab58813785d8e1aa0
        url: `https://api.darksky.net/forecast/c437967f1668becab58813785d8e1aa0/${latitude},${longitude}`,
        json: true
    }, (error, response, body) => {
        if (error) {
            callback('Unable to connect to Forecast.io server');
        } else if (response.statusCode == 400) {
            callback('Unable to fetch weather');
        } else if (response.statusCode == 200) {
            callback(undefined, {
                temperature: Number(fahrenheitToCelsius(body.currently.temperature)).toFixed(2),
                apparentTemperature: Number(fahrenheitToCelsius(body.currently.apparentTemperature)).toFixed(2)
            });
        }
    });
};

module.exports.getWeather = getWeather;