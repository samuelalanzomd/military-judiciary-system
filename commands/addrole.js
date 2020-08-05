const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => {

  //!addrole @andrew Dog Person
  if (!message.member.hasPermission("MANAGE_ROLES")) return errors.noPerms(message, "MANAGE_ROLES");
  if (args[0] == "help") {
    message.reply("Usage: !addrole <user> <role>");
    return;
  }
  let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if (!rMember) return errors.cantfindUser(message.channel);
  let role = args.join(" ").slice(22);
  if (!role) return message.reply("Please specify a role for that user to recieve.");
  let gRole = message.guild.roles.find(`name`, role);
  if (!gRole) return message.reply("I could not find the role you wish for me to recieve.");

  if (rMember.roles.has(gRole.id)) return message.reply("The user you are attempting to run this command on, already has the role.");
  await (rMember.addRole(gRole.id));

  try {
    await rMember.send(`Hello, <@${rMember.id}! You roles have been updated, and you have been given the ${gRole.name} role.>`)
  } catch (e) {
    console.log(e.stack);
    message.channel.send(`Congrats to <@${rMember.id}>, they have been given the role ${gRole.name}. We tried to DM them, but their DMs are locked.`)
  }
}

module.exports.help = {
  name: "addrole"
}