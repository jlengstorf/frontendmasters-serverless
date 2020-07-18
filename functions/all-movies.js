const movies = require('../data/movies.json');

exports.handler = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify(movies),
  };
};
