# Skeleton API: Node.js
A simple starting point for a production-ready, Docker-based service running Node.js, with API tests in a different container.

While it is a simple 'hello world' app, I've tried to incorporate good security practices in order to give a starting place for a real production service.

# Installation

1. Install Docker
2. Install Docker Compose
3. `docker-compose build`

## Development

To launch the development environment which will restart the service when the code changes and rerun the tests when the tests change, run `docker-compose -f docker-compose.watch.yml up --build`

# Production considerations

Although this skeleton code has been made as a production-ready starting point, there are a few things that you still need to be aware of in order to ensure your application is really ready for production.

## Shrinkwrap NPM packages

In order to guarantee a build of your code always uses the same dependency versions you can run `npm shrinkwrap` and then check in the resulting `npm-shrinkwrap.json`. With a shrinkwrap file, a call to `npm install` will ensure you get the same package versions each time.

Installing updates is as simple as `npm install --save <package>`. Alternatively delete the `npm-shrinkwrap.json` file, `npm install`, then `npm shrinkwrap` again to update everything.

You can read more about Shrinkwrapping on its [documentation page](https://docs.npmjs.com/cli/shrinkwrap).

# Reading material

Some useful articles to read:

* http://blog.terranillius.com/post/docker_testing/
* https://booker.codes/input-validation-in-express-with-express-validator/
* http://passportjs.org/docs
