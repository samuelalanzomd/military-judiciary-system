const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("No.");
message.channel.send(`Seattle Grace Hospital will be hosting a shift tonight at 8:00pm EST. We hope to see our wonderful patients and staff, as promotions will be given to those deemed worthy.\n@everyone`)
};

module.exports.help = {
  name: "shiftadvance"
}