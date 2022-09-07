const request = require(`postman-request`);

const forecast = (latitude, longitude, callback) => {
  const url =
    `http://api.weatherstack.com/current?access_key=cc693241bd77d41e419bfe22329cf1d5&query=` +
    latitude +
    `,` +
    longitude +
    `&units=m`;

  request({ url, json: true }, (error, { body } = {}) => {
    const data =
      (`No errors found`,
      body.current.weather_descriptions[0] +
        `. It is currently ` +
        body.current.temperature +
        ` degrees. Humidity is ` +
        body.current.humidity +
        `%.`);

    if (error) {
      callback(`Unable to connect to service!`);
    } else if (body.error) {
      callback(`Unable to find location or not available!`);
    } else {
      callback(undefined, data);
    }
  });
};

module.exports = forecast;
