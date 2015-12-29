var Botkit = require('botkit')
  , _ = require('lodash');

var controller = Botkit.slackbot({
  debug: false
});

// connect the bot to a stream of messages
controller.spawn({
  token: process.env.SLACK_API_TOKEN
}).startRTM();


// give the bot something to listen for.
controller.on('ambient', function (bot, message) {
  bot.reply(message, getResponse());
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