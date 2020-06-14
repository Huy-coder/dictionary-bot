const Discord = require("discord.js")
const colours = require("../colour.json")
const botsetting = require("../botsetting.json");
const superagent = require("superagent")

module.exports.run = async (bot,message,args) =>{
  //commands
  let msg = await message.channel.send("Đang tải...")

  let {body} = await superagent
  .get(`https://some-random-api.ml/meme`)
  //console.log(body.message)

  if(!{body}) return message.channel.send("Thử lại!")

      let mEmbed = new Discord.MessageEmbed()
      .setColor("#C0B8C3")
      .setAuthor(`meme`,message.guild.iconURL)
      .setImage(body.image)
      .setTimestamp()
      .setFooter(`Dictionary Bot`,bot.user.displayAvatarURL)

      message.channel.send({embed: mEmbed})

      msg.delete();

}

module.exports.config = {

    name: "meme",
    aliases:  [],
    noalias: "No aliases",
    accessableby:"Member",
}