const { URL } = require('url');
const fetch = require('node-fetch');
const movies = require('../data/movies.json');

exports.handler = async () => {
  const api = new URL('https://www.omdbapi.com/');

  // add the secret API key to the query string
  api.searchParams.set('apikey', process.env.OMDB_API_KEY);

  const promises = movies.map((movie) => {
    // use the movie’s IMDb ID to look up details
    api.searchParams.set('i', movie.id);

    return fetch(api)
      .then((response) => response.json())
      .then((data) => {
        const scores = data.Ratings;

        return {
          ...movie,
          scores,
        };
      });
  });

  // https://lwj.dev/blog/keep-async-await-from-blocking-execution/
  const moviesWithRatings = await Promise.all(promises);

  return {
    statusCode: 200,
    body: JSON.stringify(moviesWithRatings),
  };
};
