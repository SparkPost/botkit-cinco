var Botkit = require('botkit')
  , _ = require('lodash')
  , volume = require('./lib/volume')
  , directAddress = ['direct_message','direct_mention','mention'];

var controller = Botkit.slackbot({
  debug: false
});

// connect the bot to a stream of messages
controller.spawn({
  token: process.env.SLACK_API_TOKEN
}).startRTM();

// the ***magic***
controller.on('ambient', function (bot, message) {
  volume.defaultIfNotSet(message.channel);

  if (volume.loudEnough(message.channel)) {
    bot.reply(message, getResponse());
  }
});

function getResponse() {
  var responses = [
    'Sounds good',
    'Thanks for coming',
    'OK',
    'Sure, why not',
    'I understand'
  ];

  return _.sample(responses);
}


controller.hears('video', directAddress, function(bot, message) {
  bot.reply(message, 'https://www.youtube.com/watch?v=Tvu2ZI329V4');
});

// volume-related responses
controller.hears('louder', directAddress, function(bot, message) {
  volume.louder(message.channel);
  volumeResponse(bot, message);
});

controller.hears('quieter', directAddress, function(bot, message) {
  volume.quieter(message.channel);
  volumeResponse(bot, message);
});

controller.hears('loudest', directAddress, function(bot, message) {
  volume.loudest(message.channel);
  volumeResponse(bot, message);
});

controller.hears('quietest', directAddress, function(bot, message) {
  volume.quietest(message.channel);
  volumeResponse(bot, message);
});

controller.hears('volume', directAddress, volumeResponse;

function volumeResponse(bot, message) {
  bot.reply(message, 'Volume set to ' + volume.value(message.channel));
}
