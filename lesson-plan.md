# Lesson Plan for the Serverless Workshop with Jason Lengstorf

This is the document we’ll be working from for the serverless workshop. It includes a few types of content:

- 👨‍🏫 **Presentation** — I’ll introduce and explain concepts
- 👀 **Live Coding** — I’ll build something and explain as I go to show you how it all fits together
- 💪 **Exercise** — you’ll work on your own to implement something we just learned

## Prerequisites

- a [Netlify account][netlify]

- install the most recent version of the [Netlify CLI][cli]

  ```bash
  npm install -g netlify-cli@latest
  ```

- a computer running Node >= v12

- intermediate JavaScript knowledge

## The Major Things We’ll Learn in This Workshop

1. What does “serverless” mean?
2. How to load data using serverless functions
3. How to protect private credentials in front-end applications
4. How to send data to serverless functions
5. How to save data sent to serverless functions
6. How to limit access to serverless functions

## What does serverless mean?

👨‍🏫 The word “serverless” is a misnomer. It doesn’t mean that there are no servers; it means that _you don’t have to think about servers_. All of the infrastructure and configuration is abstracted away, meaning you only need to think about _what your function does_, not _how it’s deployed_.

There are lots of ways to set up serverless functions. Due to the speed of setup and the 

👀 The simplest possible serverless function consists of two files: `functions/boop.js` and `netlify.toml`


[netlify]: https://www.netlify.com/
[cli]: https://docs.netlify.com/cli/get-started/