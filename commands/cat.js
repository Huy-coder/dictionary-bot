const Discord = require("discord.js")
const colours = require("../colour.json")
const botsetting = require("../botsetting.json");
const superagent = require("superagent")

module.exports.run = async (bot,message,args) =>{
  //commands
 
  let msg = await message.channel.send("Generating...")

  let {body} = await superagent
  .get(`http://aws.random.cat/meow`)
  //console.log(body.file)

  if(!{body}) return message.channel.send("Try Again!")

      let cEmbed = new Discord.MessageEmbed()
      .setColor("#C0B8C3")
      .setAuthor(`Cats`,message.guild.iconURL)
      .setImage(body.file)
      .setTimestamp()
      .setFooter(`Dictionary Bot`,bot.user.displayAvatarURL)

      message.channel.send({embed: cEmbed})

      msg.delete();
}

module.exports.config = {

    name: "cat",
    aliases:  [],
    noalias: "No aliases",
    accessableby:"Member",
}