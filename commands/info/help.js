const Command = require("../base/command");
const Category = require("../base/category");

module.exports = class Ping extends Command {
    constructor(){
        super({
            name: "help",
            category: Category.type.INFO
        })
    }

    
    async execute(meiko, content, context){
        let commands = meiko.commands;

        const embed = new meiko.Discord.RichEmbed()
            .setAuthor("Meiko Help", meiko.client.user.avatarURL)
            .setDescription(`Command Help. For extended usage please use ${meiko.config.prefix}help <command>\n`)
            .setFooter(`Requested by: ${context.author.username} | Total commands: ${commands.size}`)

        Object.keys(Category.type).forEach(function(c, i) {
            try{
                embed.addField(c.toLowerCase().capitalize() + " Commands:", commands.filter(cmd => cmd.category.name.toUpperCase() === c).map(cmd1 => "`" + cmd1.name + "`").join("  "), false)
            } catch(err){}
        })

        await context.channel.send({embed})
    }
}