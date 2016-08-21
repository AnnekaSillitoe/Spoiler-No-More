// const twitterAPI = require('node-twitter-api');
// var creds = {};
// var twitter = new twitterAPI({
//     consumerKey: process.env.CONSUMER_KEY,
//     consumerSecret: process.env.CONSUMER_SECRET,
//     callback: process.env.CALLBACK_URL
// });

module.exports = [
  {
    method: 'GET',
    path: '/',
    handler: (req, reply) => {
      // twitter.getAccessToken(creds.requestToken, creds.requestTokenSecret, req.query.oauth_verifier, function(error, accessToken, accessTokenSecret, results) {
      //   if (error) {
      //     console.log(error);
      //   } else {
      //     creds.accessToken = accessToken;
      //     creds.accessTokenSecret = accessTokenSecret;
      //     twitter.getTimeline("home", {}, accessToken, accessTokenSecret, function(error, data, response) {
      //       if (error) {
      //         console.log(error);
      //       } else {
      //         data = data.map(el => {
      //           return {
      //             text: el.text,
      //             name: el.user.name,
      //             username: el.user.screen_name
      //           };
      //         });
      //         reply(data);
      //       }
      //     });
      //   }
      // });
      reply.file(__dirname + '/../public/index.html')
    }
  },
  {
    method: ['GET', 'POST'],
    path: '/twitterlogin',
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
  },
  {
    method: 'GET',
    path: '/{path*}',
    handler: function(request, reply) {
      reply.file(__dirname + '/../public/' + request.params.path)
    }
  }
];
