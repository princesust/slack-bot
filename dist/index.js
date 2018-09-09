"use strict";

var _slackbots = require("slackbots");

var _slackbots2 = _interopRequireDefault(_slackbots);

var _axios = require("axios");

var _axios2 = _interopRequireDefault(_axios);

var _faker = require("faker");

var _faker2 = _interopRequireDefault(_faker);

var _nodeEmoji = require("node-emoji");

var _nodeEmoji2 = _interopRequireDefault(_nodeEmoji);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var bot = new _slackbots2.default({
  token: "xoxb-292229518145-431814499411-F5464NyqvhNmjni4Xrwgba9w",
  name: "slack-bot"
});

bot.on("start", function () {
  // more information about additional params https://api.slack.com/methods/chat.postMessage
  var params = {
    icon_emoji: ":cat:"
  };

  // define channel, where bot exist. You can adjust it there https://my.slack.com/services
  bot.postMessageToChannel("slack-api-testing", _faker2.default.hacker.phrase(), params);

  // define existing username instead of 'user_name'
  // bot.postMessageToUser('user_name', 'meow!', params);

  // // If you add a 'slackbot' property,
  // // you will post to another user's slackbot channel instead of a direct message
  // bot.postMessageToUser('user_name', 'meow!', { 'slackbot': true, icon_emoji: ':cat:' });

  // // define private group instead of 'private_group', where bot exist
  // bot.postMessageToGroup('private_group', 'meow!', params);
});

bot.on("message", function (data) {
  // all ingoing events https://api.slack.com/rtm
  if (data.type !== "message") return;
  console.log({ data: data });
});

bot.on("error", function (e) {
  return console.log(e);
});