const Hapi = require('hapi');
const Path = require('path');
const Inert = require('inert');
const Env2 = require('env2')('config.env');
const querystring = require('querystring');
const request = require('request');
const Bell = require('bell');
const crypto = require('crypto');
var creds;

const server = new Hapi.Server()
server.connection({port: process.env.BASE_URL});

server.register([Inert, Bell], (err) => {
  server.auth.strategy('twitter', 'bell', {
        provider: 'twitter',
        password: 'cookie_encryption_password_secure',
        clientId: process.env.CONSUMER_KEY,
        clientSecret: process.env.CONSUMER_SECRET,
        isSecure: false     // Terrible idea but required if not using HTTPS especially if developing locally
    });

  server.route({
    method: 'GET',
    path: '/',
    handler: (req, reply) => {
      const path = Path.join(__dirname, 'public', 'index.html');

      var consumer_key = `oauth_consumer_key=${process.env.CONSUMER_KEY}`
      var nonce = "oauth_nonce=kYjzVBB8Y0ZFewxSWtgrWovY3uYSQ2pdetgmZeNu2VS4cg"
      var method = "oauth_signature_method=HMAC-SHA1"
      var timestamp = `oauth_timestamp=${Date.now()}`
      var token = `oauth_token=${creds.token}`
      var version = "oauth_version=2.0"
      var uri = "https://api.twitter.com/1.1/statuses/home_timeline.json";

      var parameterString = 'include_entities=true&' + consumer_key + '&' + nonce + '&' + method + '&' + timestamp + '&' + token + '&' + version;
      var signatureBaseString = 'GET&' + encodeURIComponent(uri) + '&' + encodeURIComponent(parameterString);
      var signingKey = encodeURIComponent(`${process.env.CONSUMER_SECRET}`) + '&' + encodeURIComponent(`${process.env.ACCESS_TOKEN_SECRET}`);
      var hash = crypto.createHmac('sha1', signingKey).update(signatureBaseString).digest('base64');

      const options = {
        uri: uri,
        headers: {
                Authorization:
                `OAuth ${consumer_key},${nonce},oauth_signature=${hash},${method},${timestamp},${token},${version}`
            }
      }

      request(options ,(err, result) =>{
        console.log(err, result);
        reply(result);
      })
      // reply.file(path);
    }
  })

  server.route({
        method: ['GET', 'POST'], // Must handle both GET and POST
        path: '/login',          // The callback endpoint registered with the provider
        config: {
            auth: 'twitter',
            handler: function (request, reply) {

                if (!request.auth.isAuthenticated) {
                    return reply('Authentication failed due to: ' + request.auth.error.message);
                }
                creds = request.auth.credentials;
                // console.log(request.auth.credentials);
                return reply.redirect('/');
            }
        }
    });


  server.start((err) => {
      if (err) {
          throw err;
      }
      console.log('Server running at:', server.info.uri);
  });
});
