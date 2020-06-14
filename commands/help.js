
const Discord = require("discord.js");
const colours = require("../colour.json");
const botsetting = require("../botsetting.json");
const superagent = require("superagent");
const prefix = botsetting.prefix;


module.exports.run = async (bot, message, args) =>{
    if (args[0] == "help") return message.channel.send(`Thêm ${prefix} vào trước help, ex: !help`)

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
        .setDescription(`${message.author.username} Kiểm tra thông báo!!!`)

        let Sembed = new Discord.MessageEmbed()
        .setTitle("Hỗ trợ")
        .setColor(colours.red)
        .setAuthor("Dictionary Bot", message.guild.iconURL)
        .setThumbnail(bot.user.displayAvatarURL)
        .setTimestamp()
        .setDescription(`Đây là những câu lệnh có thể thực hiện \nKí tự đầu tiên để thực thi lệnh : ${prefix} `)
        .addField(`Command`, "``cat`` ``dog`` ``meme`` ``serverinfo`` ``userinfo`` ``tudien`` ``xoa``" )
        .setFooter("Bot từ điển", bot.user.displayAvatarURL) 
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