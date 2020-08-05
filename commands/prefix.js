const Discord = require("discord.js");
const fs = require("fs");

module.exports.run = async (bot, message, args) => {

  if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("You do not have the correct permissions to run this command.");
  if(!args[0] || args[0 == "help"]) return message.reply("Usage: !prefix <desired prefix here>");

  let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));

  prefixes[message.guild.id] = {
    prefixes: args[0]
  };

  fs.writeFile("./prefixes.json", JSON.stringify(prefixes), (err) => {
    if (err) console.log(err)
  });

  let sEmbed = new Discord.RichEmbed()
  .setColor("#FF9900")
  .setTitle("Prefix Setup; Complete")
  .setDescription(`You have successfully attempted to change the prefix, the prefix is now set to ${args[0]}.`);

  message.channel.send(sEmbed);

}

module.exports.help = {
  name: "prefix"
}
