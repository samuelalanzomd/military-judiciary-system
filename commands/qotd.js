const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("No.");
message.channel.send(`In accordance with the Privacy Law as well as SGH Discord #server-rules , we remind you that posting pictures of others without their consent is not only a form of psychological harassment, but it is also illegal. @everyone`)
};

module.exports.help = {
  name: "qotdpost"
}