const Command = require("../base/command");
const Category = require("../base/category");

module.exports = class Hug extends Command {
    constructor(){
        super({
            name: "hug",
            category: Category.type.FUN
        })
    }

    async execute(meiko, content, context){
        const WeebAPI = require("../../util/weebapi.js")
        const hug = await WeebAPI("hug")
        let hugMessage;
        let isLonely = false

        if(hug === undefined){
            context.channel.send(":cry: I couldn't contact the API...")
            return;
        }

        if(context.mentions.users.size == 0){
            await context.channel.send(":x: Who am I going to hug if you don't give me a mention? *hmph*")
            return
        } else {
            if(context.mentions.users.has(context.author)){
                isLonely = true    
            } else {
                hugMessage = context.mentions.users.map(u => u.username).join(" ,")
            }
        }

        const hugEmbed = new meiko.Discord.RichEmbed()
            .setDescription(isLonely ? "*hugs you* <3" : `**${hugMessage}**, you got a hug from **${context.author.username}** <3`)
            .setImage(hug)

        await context.channel.send({embed:hugEmbed})    
    }
}