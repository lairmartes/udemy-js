const yargs = require('yargs');

const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');

const argv = yargs.options({
        a: {
            demand: true,
            alias: 'address',
            describe: 'Address to fetch weather for',
            string: true
        }
    })
    .help()
    .alias('help', 'h')
    .argv;

geocode.geocodeAddress(argv.address, (errorMessage, geocodeResults) => {
    if (errorMessage) {
        console.log(errorMessage);
    } else {
        console.log(`Weather in ${geocodeResults.address}`);
        latitude = geocodeResults.latitude;
        longitude = geocodeResults.longitude;

        weather.getWeather(latitude, longitude, (errorMessage, weatherResults) => {
            if (errorMessage) {
                console.log(errorMessage);
            } else {
                console.log(`Actual Temperature: ${weatherResults.temperature}`);
                console.log(`It feels: ${weatherResults.apparentTemperature}`);
            }
        });
    }
});