const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => {

  if (!message.member.hasPermission("MANAGE_ROLES")) return errors.noPerms(message, "MANAGE_ROLES");
  if(args[0] == "help"){
    message.reply("Usage: !removerole <user> <role>");
    return;
  }
  let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!rMember) return message.reply("I could not find the user you specified.");
  let role = args.join(" ").slice(22);
  if(!role) return message.reply("Please specify a role to remove.");
  let gRole = message.guild.roles.find(`name`, role);
  if(!gRole) return message.reply("The role you specified does not exsist or I could not find it.");

  if(!rMember.roles.has(gRole.id)) return message.reply("The user does not have that role.");
  await(rMember.removeRole(gRole.id));

  try{
    await rMember.send(`RIP, you lost the ${gRole.name} role.`)
  }catch(e){
    message.channel.send(`RIP to <@${rMember.id}>, We removed ${gRole.name} from them. We tried to DM them, but their DMs are locked.`)
  }
}

module.exports.help = {
  name: "removerole"
}