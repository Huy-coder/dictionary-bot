
const Discord = require("discord.js");
const colours = require("../colour.json");
const botsetting = require("../botsetting.json");
const superagent = require("superagent");
const prefix = botsetting.prefix;


module.exports.run = async (bot, message, args) =>{
    if (args[0] == "help") return message.channel.send(`Just do ${prefix} help instead`)

    if(args[0]) {
        let command = args[0];
        if (bot.commands.has(command)){
            command = bot.commands.get(command);
            var SHembed = new Discord.MessageEmbed()
            .setColor(colours.orange)
            .setAuthor("Testing bot Help",message.guild.iconURl)
            .setDescription(`The bot prefix is ${prefix} \n command: ${command.config.name} \n Description: ${command.config.description || 'No description'} \n Usage: ${command.config.usage || "No Usage"} \n Accesableby: ${command.config.accessableby || 'Members'} \n Alisas: ${command.config.aliases}`)
            message.channel.send(SHembed)
        
        }

    }

    if(!args[0]) {
        message.delete();
        let embed = new Discord.MessageEmbed()
        .setAuthor("help command", message.guild.iconURl)
        .setColor(colours.gray)
        .setDescription(`${message.author.username} check your dms`)

        let Sembed = new Discord.MessageEmbed()
        .setColor(colours.red)
        .setAuthor("Testbot Help", message.guild.iconURL)
        .setThumbnail(bot.user.displayAvatarURL)
        .setTimestamp()
        .setDescription(`there are the available command for the Testbot \n the bot prefix is : ${prefix} `)
        .addField(`Command`, "``cat`` ``dog`` ``meme`` ``serverinfo`` ``userinfo`` ``tudien``" )
        .setFooter("Test bot ", bot.user.displayAvatarURL) 
        message.channel.send(embed).then(m => m.delete(10000))
        message.author.send(Sembed)
    }
}
module.exports.config = {
    name: "help",
    aliases:  ["HELP"],
    usage: '!usage',
    description :"",
    //noalias: "No aliases",
    accessableby:"Member",
}