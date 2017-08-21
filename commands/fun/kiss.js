const Command = require("../base/command");
const Category = require("../base/category");

module.exports = class Pat extends Command {
    constructor(){
        super({
            name: "kiss",
            category: Category.type.FUN
        })
    }
    
    async execute(meiko, content, context){
        const WeebAPI = require("../../util/weebapi.js")
        const kiss = await WeebAPI("kiss")
        let kissMessage;
        let isLonely = false

        if(kiss === undefined){
            context.channel.send(":cry: I couldn't contact the API...")
            return;
        }

        if(context.mentions.users.size == 0){
            await context.channel.send(":x: Who am I going to kiss if you don't give me a mention? *hmph*")
            return
        } else {
            if(context.mentions.users.has(context.author)){
                isLonely = true    
            } else {
                kissMessage = context.mentions.users.map(u => u.username).join(" ,")
            }
        }

        const kissEmbed = new meiko.Discord.RichEmbed()
            .setDescription(isLonely ? "*kisses you* <3" : `**${kissMessage}**, you got a kiss from **${context.author.username}** <3`)
            .setImage(kiss)

        await context.channel.send({embed:kissEmbed})    
    }
}