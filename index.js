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


controller.on('ambient', function (bot, message) {
  console.log(message);
  bot.reply(message, getResponse());
});

controller.hears('louder', directAddress, function(bot, message) {
  volume.louder();
});

controller.hears('quieter', directAddress, function(bot, message) {
  volume.quieter()
});

controller.hears('loudest', directAddress, function(bot, message) {
  volume.loudest();
});

controller.hears('quietest', directAddress, function(bot, message) {
  volume.quietest();
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