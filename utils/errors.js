const Discord = require("discord.js");
const fs = require("fs");
let config = require("../botconfig.json")

module.exports.noPerms = (message, perm) => {
    let embed = new Discord.RichEmbed()
        .setAuthor(message.author.username)
        .setTitle("Incomplete Command; Error")
        .setDescription("You do not have sufficent permissions to run that command. Please check your permissions and try again.")
        .setColor("#ff0000");

    message.channel.send(embed).then(m => m.delete(5000));
}

module.exports.equalPerms = (message, user, perms) => {

    let embed = new Discord.RichEmbed()
        .setAuthor(message.author.username)
        .setColor("#fffa00")
        .setTitle("Incomplete Command; Error")
        .setDescription("The user you are attempting to run this command on, has permissions that blocks us from running it. Please check their permissions and try again.");
    message.channel.send(embed).then(m => m.delete(5000));

}

module.exports.botuser = (message) => {
    let embed = new Discord.RichEmbed()
        .setTitle("Incomplete Command; Error")
        .setDescription("The user you are attempting to run this command is a Discord Registered Bot.")
        .setColor("#00ff08");

    message.channel.send(embed).then(m => m.delete(5000));
}

module.exports.cantfindUser = (channel) => {
    let embed = new Discord.RichEmbed()
        .setTitle("Error")
        .setDescription("I could not find the user you are attempting to run this command on. Please try again and mention the user.")
        .setColor(config.red);

    channel.send(embed).then(m => m.delete(5000));
}

module.exports.noReason = (channel) => {
    let embed = new Discord.RichEmbed()
        .setTitle("Incomplete Command; Error")
        .setDescription("Please supply a reason for the command you are running.")
        .setColor(config.red);

    channel.send(embed).then(m => m.delete(5000));
}

