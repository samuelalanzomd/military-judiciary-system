const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let sicon = message.guild.iconURL;
    let serverembed = new Discord.RichEmbed()
    .setTitle("**Military Judiciary** | Frequently Asked Questions")
    .setColor("#333333")
    .setDescription("***Where can I find the MLCE Exam?**\n\n")
    .setFooter("Military Judiciary System")
    

    
    let shiftChannel = message.guild.channels.find(`name`, "shift-announcements");
   
    

    
    shiftChannel.send(serverembed);
}

module.exports.help = {
  name:"faq"
}