const Discord = require("discord.js")
const colours = require("../colour.json")
const botsetting = require("../botsetting.json");
const superagent = require("superagent")

module.exports.run = async (bot,message,args) =>{
  //commands
  let uEmbed = new Discord.MessageEmbed()
  .setColor('#FF4500')
  .setTitle('USER INFORMATION')
  .setThumbnail(message.guild.iconURL)
  .setAuthor(`${message.author.username} Info`,message.author.displayAvatarURL )
  .addField('USER NAME',`${message.author.username}`,true)
  .addField('DISCRIPTION',`${message.author.discriminator}`,true)
  .addField('ID',`${message.author.id}`,true)
  .addField('STATUS',`${message.author.presence}`,true)
  .addField('CREATE AT',`${message.author.createdAt}`,true)
  .setFooter('Dictionary Bot', bot.user.displayAvatarURL);
  message.channel.send({embed: uEmbed});

}

module.exports.config = {

    name: "userinfo",
    aliases:  ["user"],
    noalias: "No aliases",
    accessableby:"Member",
}