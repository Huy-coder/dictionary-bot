const Discord = require("discord.js");
const colours = require("../colour.json");
const botsetting = require("../botsetting.json");
const { delete, delete } = require("superagent");

module.exports = {
    config: {
        name: "clear",
        aliases:  ["xoa"],
        usage: '!xoa',
        category: "delate",
        description :"delete any message",
        accessableby:"Member",
},
    run: async(client, message,args) =>{
        if(message.deletable){
            message.delete();
        }
        
        if(!message.member.hasPermission("MANAGE_MESSAGES")) {
            return message.reply("Bạn không có quyền xóa tin nhắn...").then(m => m.delete(50))
        }

        if(isNaN(args[0]) || parseInt(args[0]) <= 0) {
            return message.reply("Nhập số lượng tin nhắn cần xóa vào đeeee....").then(m => m.delete(5000));
        }

        if(!message.guild.me.hasPermission("MANAGE_MESSAGES")) {
            return message.reply("Xin lỗi....Không thể xóa tin nhắn này").then(m => m.delete(50000));
        }

        if(parseInt(args[0]) > 100) {
            deleteAmount = 100;
        }
        else {
            deleteAmount = parseInt(args[0]);
        }

        message.channel.bulkDelete(deleteAmount, true)
            .then(delete => message.channel.send(`Tôi sẽ xóa ${deleted.size} tin nhắn.`))
            .catch(err => message.reply(`Có gì đó sai sai à nha.... ${err}`));
}
}
