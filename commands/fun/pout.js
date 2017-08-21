const Command = require("../base/command");
const Category = require("../base/category");

module.exports = class Pout extends Command {
    constructor(){
        super({
            name: "pout",
            category: Category.type.FUN
        })
    }

    async execute(meiko, content, context){
        const WeebAPI = require("../../util/weebapi.js")
        const pout = await WeebAPI("pout")
        let poutMessage;
        let isLonely = false

        if(pout === undefined){
            context.channel.send(":cry: I couldn't contact the API...")
            return;
        }

        if(context.mentions.users.size == 0){
            await context.channel.send(":x: Who am I going to pout at if you don't give me a mention? *hmph*")
            return
        } else {
            if(context.mentions.users.has(context.author)){
                isLonely = true    
            } else {
                poutMessage = context.mentions.users.map(u => u.username).join(" ,")
            }
        }

        const poutEmbed = new meiko.Discord.RichEmbed()
            .setDescription(isLonely ? "*pouts* hmph" : `**${context.author.username}** pouts at **${poutMessage}** *hmph*`)
            .setImage(pout)

        await context.channel.send({embed:poutEmbed})    
    }
}