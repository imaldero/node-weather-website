const request = require(`postman-request`);

const geocode = (address, callback) => {
  const url =
    `http://api.positionstack.com/v1/forward?access_key=b8765cafa358f8c25636e17db5a8532a&query=` +
    encodeURIComponent(address) +
    `&limit=1`;

  request({ url, json: true }, (error, { body } = {}) => {
    if (error) {
      callback(`Unable to connect to service!`);
    } else if (body.error || body.data.length === 0) {
      callback(`Unable to find location!`);
    } else {
      callback(undefined, {
        latitude: body.data[0].latitude,
        longitude: body.data[0].longitude,
        location: body.data[0].label,
      });
    }
  });
};

module.exports = geocode;
