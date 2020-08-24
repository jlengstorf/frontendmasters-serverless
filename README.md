# Frontend Masters: Serverless Functions with Jason Lengstorf

This is the source code for a Frontend Masters course with Jason Lengstorf about serverless functions.

Live site! https://frontendmasters-serverless.netlify.app/

### [See details](https://frontendmasters.com/workshops/serverless-functions/)

## The Major Things We’ll Learn in This Workshop

1. What does “serverless” mean?
2. How to load data using serverless functions
3. How to protect private credentials in front-end applications
4. How to send data to serverless functions
5. How to save data sent to serverless functions
6. How to limit access to serverless functions

## Get Started

Node version: v12.12.0

```bash
# currently v2.58.0
npm install -g netlify-cli@latest
```

```bash
# or use HTTPS if you have issues cloning
git clone --branch start https://github.com/jlengstorf/frontendmasters-serverless.git
```

## Get Environment Variables:

Save all of these in `.env`:

- `OMDB_API_KEY` — get this from https://omdbapi.com/
- `HASURA_API_URL` — get this from https://hasura.io/
- `HASURA_ADMIN_SECRET` — get this from https://hasura.io/

Make sure to install dotenv `npm install dotenv` and add `require("dotenv").config()` to each file that uses one of the environment variables.

## Resources

- [Netlify Functions](https://www.netlify.com/products/functions/?utm_source=fem-sls&utm_medium=functions-jl&utm_campaign=devex)
- [Netlify Identity](https://docs.netlify.com/visitor-access/identity/?utm_source=fem-sls&utm_medium=functions-jl&utm_campaign=devex)
- [Hasura](https://cloud.hasura.io/)
- [Heroku](https://www.heroku.com/)

## Using Hasura & Heroku to create a secret Admin Key:

- Create a Hasura account, and link it to a Heroku account.

- Go to Settings on your Heroku account, and add config vars HASURA_ADMIN_SECRET and HASURA_GRAPHQL_ADMIN_SECRET.
  ![Config Var Heroku](/img/config-vars.png)

- On Hasura, once you create a new project, add a new env var, Admin Secret, by clicking on **New Env Var**, and name it Admin Secret.
  ![Config Var Hasura](/img/env-var.png)

- Launch the Hasura console and make sure that your GraphQL endpoint is no longer public.
  ![GraphQL Endpoint](/img/GraphQL-endpoint.png)

## License

<a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License</a>.

