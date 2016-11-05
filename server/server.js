const Hapi = require('hapi');
const Inert = require('inert');
const Env2 = require('env2')('config.env');
const routes = require('./routes.js');

const server = new Hapi.Server();
server.connection({port: process.env.BASE_URL});

server.register([Inert], (err) => {
  server.route(routes);

  server.state('creds', {
    ttl: null,
    isSecure: false,
    isHttpOnly: false,
    encoding: 'base64json',
    clearInvalid: false,
    strictHeader: true
  });

  server.state('user', {
    ttl: null,
    isSecure: false,
    isHttpOnly: false,
    encoding: 'base64json',
    clearInvalid: false,
    strictHeader: true
  });

  server.start((err) => {
    if (err) {
      throw err;
    }
    console.log('Server running at:', server.info.uri);
  });
});
