const Discord = require("discord.js")
const colours = require("../colour.json")
const botsetting = require("../botsetting.json");
const superagent = require("superagent")

module.exports.run = async (bot,message,args) =>{
  //commands
 
    let sEmbed = new Discord.MessageEmbed()
    .setColor('#FF005D')
    .setTitle('SERVER INFORMATION')
    .setAuthor(`${message.guild.name} Info`,message.guild.iconURL )
    .addField('Guild Name', `${message.guild.name}`, true)
    .addField('Guild Owner', `${message.guild.owner}`, true)
    .addField('Member Count', `${message.guild.memberCount}`, true)
    .addField('Role Count', `${message.guild.roles.size}`, true)
    .setImage('https://thumbs.dreamstime.com/z/business-word-dictionary-312802.jpg')
    .setTimestamp()
    .setFooter('Dictionary Bot', bot.user.displayAvatarURL);
    message.channel.send({embed: sEmbed});
}

module.exports.config = {

    name: "serverinfo",
    aliases:  ["si","server"],
    accessableby:"Member"
}