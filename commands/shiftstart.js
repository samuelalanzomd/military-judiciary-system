const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("No.");
message.channel.send(`<:emojilogo:569180311733272596> **Shift Announcement** <:emojilogo:569180311733272596>\n\nIn accordance with Emerus Emergency Hospital's Daily Shift Schedule, a shift is starting down at the Main Campus! Patients, come for quality patient care and staff come for possible learning and promotions may be given to those deemed worthy.\n\n🔗**:** https://www.roblox.com/games/2124599120/Seattle-Grace-Hospital-V-4-3-AMBULANCES-HOUSING\n@everyone`)
};

module.exports.help = {
  name: "shiftstart"
}