const fs = require('fs');

const movies = fs.readFileSync(`${__dirname}/../data/movies.json`, 'utf-8');

exports.handler = async () => {
  return {
    statusCode: 200,
    body: movies,
  };
};
