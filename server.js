const Hapi = require('hapi');
const Path = require('path');
const Inert = require('inert');
const Env2 = require('env2')('config.env');
const querystring = require('querystring');
const request = require('request');

const server = new Hapi.Server()
server.connection({port: process.env.BASE_URL});

server.register(Inert, (err) => {
  server.route({
    method: 'GET',
    path: '/',
    handler: (req, reply) => {
      const path = Path.join(__dirname, 'public', 'index.html');
      reply.file(path);
    }
  })

    server.route({
      method: 'GET',
      path: '/login',
      handler: (req, reply) => {
        var query = querystring.stringify({
          client_id: process.env.OWNER_ID,
          redirect_uri: process.env.REDIRECT_URI,
        })
        //reply.redirect('https://api.twitter.com/oauth/authorize' + '?' + query);

        // const options = {
        //   url: 'https://api.twitter.com/oauth/request_token',
        //   method: 'POST',
        //   headers: {
        //     Authorization: `OAuth oauth_nonce=${process.env.CONSUMER_SECRET},oauth_callback=${process.env.REDIRECT_URI},oauth_signature_method=HMAC-SHA1,oauth_consumer_key=${process.env.CONSUMER_KEY},oauth_version=2.0`
        //   }
        // }
        var OAuth = require('oauth');


     var OAuth2 = OAuth.OAuth2;
     var twitterConsumerKey = process.env.CONSUMER_KEY;
     var twitterConsumerSecret = process.env.CONSUMER_SECRET;
     var oauth2 = new OAuth2(twitterConsumerKey,
       twitterConsumerSecret,
       'https://api.twitter.com/',
       null,
       'oauth2/token',
       null);
     oauth2.getOAuthAccessToken(
       '',
       {'grant_type':'client_credentials'},
       function (e, access_token, refresh_token, results){
       console.log('bearer: ',access_token);
     })
        // request(options, function (error, response, body) {
        //   if (!error && response.statusCode == 200) {
        //     reply(body);
        //   } else {
        //     console.log(response);
        //     reply(error)
        //   }
        // })

      }
    })

  server.start((err) => {
      if (err) {
          throw err;
      }
      console.log('Server running at:', server.info.uri);
  });
});
