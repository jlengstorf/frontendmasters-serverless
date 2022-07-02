const movies = require("../data/movies");

exports.handler = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify(movies),
  };
};
