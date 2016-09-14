const twitterAPI = require('node-twitter-api');
var creds = {};
var twitter = new twitterAPI({
    consumerKey: process.env.CONSUMER_KEY,
    consumerSecret: process.env.CONSUMER_SECRET,
    callback: process.env.CALLBACK_URL
});

module.exports = [
  {
    method: 'GET',
    path: '/',
    handler: (req, reply) => {
      if (req.query.oauth_verifier){
        twitter.getAccessToken(creds.requestToken, creds.requestTokenSecret, req.query.oauth_verifier, function(error, accessToken, accessTokenSecret, results) {
          if (error) {
            console.log(error);
          } else {
            creds.accessToken = accessToken;
            creds.accessTokenSecret = accessTokenSecret;
            reply.file(__dirname + '/../public/index.html')
          }
        });
      } else {
        reply.file(__dirname + '/../public/index.html')
      }
    }
  },
  {
    method: ['GET', 'POST'],
    path: '/twitterlogin',
    handler: function (req, reply) {
      twitter.getRequestToken(function(error, requestToken, requestTokenSecret, results){
        if (error) {
          console.log("Error getting OAuth request token : " + error);
        } else {
          creds.requestToken = requestToken;
          creds.requestTokenSecret = requestTokenSecret;
          if (creds.accessToken) {
            reply.file(__dirname + '/../public/index.html')
          } else {
            reply.redirect(`https://twitter.com/oauth/authenticate?oauth_token=${requestToken}`)
          }
        }
      });
    }
  },
  {
    method: 'GET',
    path: '/returndata',
    handler: (req, reply) => {
      twitter.getTimeline("home", {count:10}, process.env.ACCESS_TOKEN, process.env.ACCESS_TOKEN_SECRET, function(error, data, response) {
        if (error) {
          console.log(error);
        } else {
          data = data.map(formatTweet);
          reply(data);
        }
      });
    }
  },
  {
    method: 'GET',
    path: '/friendsid',
    handler: (req, reply) => {
      twitter.friends("ids", {}, process.env.ACCESS_TOKEN, process.env.ACCESS_TOKEN_SECRET, function(error, data, response) {
        if (error) {
          console.log(error);
        } else {
          var ids = data.ids.splice(0, 99).join();
          console.log(ids);
          twitter.users("lookup", {user_id: ids}, process.env.ACCESS_TOKEN, process.env.ACCESS_TOKEN_SECRET, function(error, data, response) {
            if (error) {
              console.log(error);
            } else {
              data = data.map(el => {
                return {
                  name: el.name,
                  screen_name: el.screen_name,
                  description: el.description,
                  profile_image: el.profile_image_url
                };
              });
              reply(data);
            }
          });
        }
      });
    }
  },
  {
    method: 'GET',
    path: '/listsowned',
    handler: (req, reply) => {
      twitter.lists("ownerships", {}, process.env.ACCESS_TOKEN, process.env.ACCESS_TOKEN_SECRET, function(error, data, response) {
        if (error) {
          console.log(error);
        } else {
          data = data.lists.map(el => {
            return {
              name: el.name,
              link: el.uri
            };
          });
          reply(data);
        }
      });
    }
  },
  {
    method: 'GET',
    path: '/dms',
    handler: (req, reply) => {
      twitter.direct_messages("sent", {count:200}, process.env.ACCESS_TOKEN, process.env.ACCESS_TOKEN_SECRET, function(error, data, response) {
        if (error) {
          console.log(error);
        } else {
          data = data.map(el => {
            return {
              text: el.text,
              name: el.recipient.name,
              screen_name: el.recipient.screen_name,
              profile_image: el.recipient.profile_image_url
            };
          });
          const dataObject = {};
          for (var i = 0; i < data.length; i++) {
            if (!dataObject[data[i].name]) {
              dataObject[data[i].name] = data[i];
            }
          }
          reply(Object.keys(dataObject).map(el => dataObject[el]));
        }
      });
    }
  },
  {
    method: 'GET',
    path: '/rts',
    handler: (req, reply) => {
      twitter.getTimeline("mentions_timeline", {count: 200}, process.env.ACCESS_TOKEN, process.env.ACCESS_TOKEN_SECRET, function(error, data, response) {
        if (error) {
          console.log(error);
        } else {
          reply(data);
          // data = data.map(el => {
          //   return {
          //     text: el.text,
          //     name: el.recipient.name,
          //     screen_name: el.recipient.screen_name,
          //     profile_image: el.recipient.profile_image_url
          //   };
          // });
          // const dataObject = {};
          // for (var i = 0; i < data.length; i++) {
          //   if (!dataObject[data[i].name]) {
          //     dataObject[data[i].name] = data[i];
          //   }
          // }
          // reply(Object.keys(dataObject).map(el => dataObject[el]));
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

function formatTweet(tweet) {
  return {
    text: tweet.text,
    name: tweet.user.name,
    username: tweet.user.screen_name,
    profileImage: tweet.user.profile_image_url,
    image: getMedia(tweet).image,
    video: getMedia(tweet).video,
  };
}

function getMedia(tweet){
  var media = {};
  if(tweet.extended_entities && tweet.extended_entities.media) {
    media.image = tweet.extended_entities.media.map(el => {
      if (el.type === "photo") {
        return el.media_url;
      };
    });
  }
  if(tweet.extended_entities && tweet.extended_entities.media && tweet.extended_entities.media[0] && tweet.extended_entities.media[0].video_info) {
    var videos = tweet.extended_entities.media[0].video_info.variants;
    media.video = videos.filter(el => {
      return el.content_type = "video/mp4";
    }).sort((a, b) => {
      return a.bitrate - b.bitrate;
    })[0].url;
    console.log(media.video);
  }
  console.log(media);
  return media;
}
