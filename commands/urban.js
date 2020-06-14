const urban = require("urban");
const Discord = require("discord.js");
const colours = require("../colour.json");
const botsetting = require("../botsetting.json");
const {stripIndents} = require("common-tags");

module.exports = {
    config: {
        name: "urban",
        aliases:  ["tudien"],
        usage: '<search|random> (query)',
        category: "miscellaneous",
        description :"get a word from urban dictionary",
        accessableby:"Member",
},
    run: async(bot, message,args) =>{
        //if(!message.channel.dictionary) return message.channel.send("pls run this command in a `dictionary` channel ")
        if(args < 1 || !["random","search"].includes(args[0])) return message.channel.send("`cách sử dụng: \n!urban <search|random> (query) hoặc là !tudien <search|random> (query)`")
        let search = args[1] ? urban(args.slice(1).join(" ")) : urban.random()
            try{
                search.first(res => {
                    if(!res) return message.channel.send("Không có kết quả");
                    let {word, definition, example, thumbs_up, thumbs_down, premalink, author} = res; //res.word

                        let embed = new Discord.MessageEmbed()
                            .setTitle(`Urban Dictionary | ${word}`)
                            .setColor("#FF005D")
                            .setAuthor(`TỪ ĐIỂN ANH-ANH`)
                            .setDescription(stripIndents`ĐỊNH NGHĨA: \n${definition || "không tìm thấy"} \n\nVÍ DỤ: \n${example || "Không có ví dụ"} \n\nSố lượt ủng hộ: ${thumbs_up || 0} \n\nSố lượt không ủng hộ: ${thumbs_down || 0} \n LIÊN KẾT: \n[link to ${word}](${premalink || "https://www.urbandictionary.com/"})`)
                            .setTimestamp()
                            .setFooter(`Written by ${author || "unknown"}`);

                            message.channel.send(embed)

                })
            } catch (e){
                console.log(e)
                return message.channel.send("look like i've broken! try again")
            }
    }
}