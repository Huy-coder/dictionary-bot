const Discord = require("discord.js")
const colours = require("../colour.json")
const botsetting = require("../botsetting.json");
const superagent = require("superagent")

module.exports.run = async (bot,message,args) =>{
  //commands
 
  let msg = await message.channel.send("Đang tải...")

  let {body} = await superagent
  .get(`https://dog.ceo/api/breeds/image/random`)
  //console.log(body.message)

  if(!{body}) return message.channel.send("Thử lại!!")

      let dEmbed = new Discord.MessageEmbed()
      .setColor("#C0B8C3")
      .setAuthor(`Dogs`,message.guild.iconURL)
      .setImage(body.message)
      .setTimestamp()
      .setFooter(`Dictionary Bot`,bot.user.displayAvatarURL)

      message.channel.send({embed: dEmbed})

      msg.delete();
}

module.exports.config = {

    name: "dog",
    aliases:  ["cho"],
    noalias: "No aliases",
    accessableby:"Member",
}