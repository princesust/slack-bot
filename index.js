import SlackBot from "slackbots";
// import axios from "axios";
import faker from "faker";
// import emoji from "node-emoji";

const bot = new SlackBot({
  token: "xoxb-292229518145-431814499411-F5464NyqvhNmjni4Xrwgba9w",
  name: "slack-bot"
});

bot.on("start", () => {
  // more information about additional params https://api.slack.com/methods/chat.postMessage
  var params = {
    icon_emoji: ":cat:"
  };

  // define channel, where bot exist. You can adjust it there https://my.slack.com/services
  bot.postMessageToChannel("slack-api-testing", faker.hacker.phrase(), params);

  // define existing username instead of 'user_name'
  // bot.postMessageToUser('user_name', 'meow!', params);

  // // If you add a 'slackbot' property,
  // // you will post to another user's slackbot channel instead of a direct message
  // bot.postMessageToUser('user_name', 'meow!', { 'slackbot': true, icon_emoji: ':cat:' });

  // // define private group instead of 'private_group', where bot exist
  // bot.postMessageToGroup('private_group', 'meow!', params);
});

bot.on("message", data => {
  // all ingoing events https://api.slack.com/rtm
  if (data.type !== "message") return;
  console.log({ data });
});

bot.on("error", e => console.log(e));
