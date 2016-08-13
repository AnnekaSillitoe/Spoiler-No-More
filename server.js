const Hapi = require('hapi');
const Path = require('path');
const Inert = require('inert');
const Env2 = require('env2')('config.env');
const querystring = require('querystring');
const twitterAPI = require('node-twitter-api');
var creds = {};

const server = new Hapi.Server()
server.connection({port: process.env.BASE_URL});

server.register([Inert], (err) => {
  var twitter = new twitterAPI({
      consumerKey: process.env.CONSUMER_KEY,
      consumerSecret: process.env.CONSUMER_SECRET,
      callback: process.env.CALLBACK_URL
  });

  server.route({
    method: 'GET',
    path: '/',
    handler: (req, reply) => {
      twitter.getAccessToken(creds.requestToken, creds.requestTokenSecret, req.query.oauth_verifier, function(error, accessToken, accessTokenSecret, results) {
        if (error) {
          console.log(error);
        } else {
            creds.accessToken = accessToken;
            creds.accessTokenSecret = accessTokenSecret;
            twitter.getTimeline("home", {},
            accessToken,
            accessTokenSecret,
            function(error, data, response) {
                if (error) {
                    console.log(error);
                } else {
                    data = data.map(el => {
                      return {
                        text: el.text,
                        name: el.user.name,
                        username: el.user.screen_name
                      };
                    });
                    reply(data);
                }
              }
            );
        }
      });
    }
  })

  server.route({
        method: ['GET', 'POST'], // Must handle both GET and POST
        path: '/login',          // The callback endpoint registered with the provider
        handler: function (request, reply) {
          twitter.getRequestToken(function(error, requestToken, requestTokenSecret, results){
            if (error) {
              console.log("Error getting OAuth request token : " + error);
            } else {
              creds.requestToken = requestToken;
              creds.requestTokenSecret = requestTokenSecret;
              reply.redirect(`https://twitter.com/oauth/authenticate?oauth_token=${requestToken}`)
            }
          });
        }
    });


  server.start((err) => {
      if (err) {
          throw err;
      }
      console.log('Server running at:', server.info.uri);
  });
});
