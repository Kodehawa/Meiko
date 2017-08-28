const Command = require("../base/command");
const Category = require("../base/category");

module.exports = class Slap extends Command {
    constructor(){
        super({
            name: "slap",
            category: Category.type.FUN
        })
    }

    async execute(meiko, content, context){
        const WeebAPI = require("../../util/weebapi.js")
        const slap = await WeebAPI("slap")
        let slapMessage;
        let isLonely = false

        if(slap === undefined){
            context.channel.send(":cry: I couldn't contact the API...")
            return;
        }

        if(context.mentions.users.size == 0){
            await context.channel.send(":x: Who am I going to slap if you don't give me a mention? *hmph*")
            return
        } else {
            if(context.mentions.users.has(context.author)){
                isLonely = true    
            } else {
                slapMessage = context.mentions.users.map(u => u.username).join(" ,")
            }
        }

        const patEmbed = new meiko.Discord.RichEmbed()
            .setDescription(isLonely ? "U-Uh... idk why you want this, but.. *slaps you*" : `**${context.author.username}** just slapped **${slapMessage}**!`)
            .setImage(slap)

        await context.channel.send({embed:patEmbed})    
    }
}