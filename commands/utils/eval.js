const Command = require("../base/command");
const Category = require("../base/category");


module.exports = class Ping extends Command {
    constructor(){
        super({
            name: "eval",
            category: Category.type.OWNER
        })
    }

    async execute(meiko, content, context){
        try {
            const code = content;
            let evaled = eval(code);

            if (typeof evaled !== "string")
                evaled = require("util").inspect(evaled);

            const embed = new meiko.Discord.RichEmbed()
                .setAuthor("Evaluated with success", context.author.avatarURL)
                .setDescription(`**Executed successfully and returned:** ${evaled}`)
                .setColor(0xFF8C00)
                .setFooter(`Requested by: ${context.author.username}`)

            await context.channel.send({embed});
        } catch (err) {
            const embed = new meiko.Discord.RichEmbed()
                .setAuthor("Evaluated with errors", context.author.avatarURL)
                .setDescription(`Error: ${err}`)
                .setColor(0xFF0000)
                .setFooter(`Requested by: ${context.author.username}`)
        }
    }

    
}
