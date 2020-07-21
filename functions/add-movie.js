const { query } = require('./util/hasura');

exports.handler = async (event, context) => {
  const { id, title, tagline, poster } = JSON.parse(event.body);
  const { user } = context.clientContext;
  const isLoggedIn = user && user.app_metadata && user.app_metadata.roles;
  const roles = isLoggedIn ? user.app_metadata.roles : [];

  if (!isLoggedIn || !roles.includes('admin')) {
    return {
      statusCode: 401,
      body: 'Unauthorized',
    };
  }

  const result = await query({
    query: `
      mutation CreateMovie($id: String!, $poster: String!, $tagline: String!, $title: String!) {
        insert_movies_one(object: {id: $id, poster: $poster, tagline: $tagline, title: $title}) {
          id
          poster
          tagline
          title
        }
      }
    `,
    variables: { id, title, tagline, poster },
  });

  return {
    statusCode: 200,
    body: JSON.stringify(result),
  };
};
