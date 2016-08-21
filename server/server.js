const Hapi = require('hapi');
const Path = require('path');
const Inert = require('inert');
const Env2 = require('env2')('config.env');
const routes = require('./routes.js');

const server = new Hapi.Server()
server.connection({port: process.env.BASE_URL});

server.register([Inert], (err) => {
  server.route(routes);

  server.start((err) => {
      if (err) {
          throw err;
      }
      console.log('Server running at:', server.info.uri);
  });
});
