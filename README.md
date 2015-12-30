# Cinco Facetime Party Snoozer Slack Bot
Thanks for coming!

Tired of talking and having no one respond to you? Let Hubot be your friend! Now the Cinco Facetime Party Snoozer
Slack bot will converse with you like a normal human with 5 professional responses!

## What?
Cinco Facetime Party Snoozer will let a bot participate in the conversation in your channel just like a real boy.

You can change how often the bot responds by adjusting the volume. Volume controls are exponential, so any time you turn
the volume up Hubot will respond twice as often. Turn the volume down and Hubot will respond half as often.

## How?

The easiest way is to fork this repo and set up a remote for a Heroku instance. Then configure your bot in Slack at
https://<your-team>.slack.com/services/new/bot. You'll need to set your API token as a env var named `SLACK_API_TOKEN`.

Then invite your bot to a channel and it's party time!

## Why?
This seemed like a good idea at the time.

https://www.youtube.com/watch?v=kg2UlYDswSc

## Commands

* `cinco louder`: Makes Hubot respond more often.
* `cinco quieter`: Make Hubot respond less often.
* `cinco loudest`: Makes Hubot respond all the time.
* `cinco quietest`: Makes Hubot respond not very often at all.
