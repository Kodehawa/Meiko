const Command = require("../base/command");
const Category = require("../base/category");

module.exports = class Pat extends Command {
    constructor(){
        super({
            name: "pat",
            category: Category.type.FUN
        })
    }

    async execute(meiko, content, context){
        const WeebAPI = require("../../util/weebapi.js")
        const pat = await WeebAPI("pat")
        let patMessage;
        let isLonely = false

        if(pat === undefined){
            context.channel.send(":cry: I couldn't contact the API...")
            return;
        }

        if(context.mentions.users.size == 0){
            await context.channel.send(":x: Who am I going to pat if you don't give me a mention? *hmph*")
            return
        } else {
            if(context.mentions.users.has(context.author)){
                isLonely = true    
            } else {
                patMessage = context.mentions.users.map(u => u.username).join(" ,")
            }
        }

        const patEmbed = new meiko.Discord.RichEmbed()
            .setDescription(isLonely ? "*pats you* <3" : `**${patMessage}**, you got a pat from **${context.author.username}** <3`)
            .setImage(pat)

        await context.channel.send({embed:patEmbed})    
    }
}