const Command = require("../base/command");
const Category = require("../base/category");

module.exports = class Lewd extends Command {
    constructor(){
        super({
            name: "lewd",
            category: Category.type.FUN
        })
    }

    async execute(meiko, content, context){
        const WeebAPI = require("../../util/weebapi.js");
        const lewdImage = await WeebAPI("lewd")

        if(lewdImage === undefined){
            context.channel.send(":cry: I couldn't contact the API...")
            return;
        }

        const embed = new meiko.Discord.RichEmbed()
            .setDescription("L-Lewd, too lewd!")
            .setImage(lewdImage)

        await context.channel.send({embed})    
    }
}