const Command = require("../base/command");
const Category = require("../base/category");
const humanizeDuration = require("humanize-duration")

module.exports = class About extends Command {
    constructor(){
        super({
            name: "about",
            category: Category.type.INFO
        })
    }

    async execute(meiko, content, context){
        console.log(context)
        const client = meiko.client;
        const embed = new meiko.Discord.RichEmbed()
            .setAuthor("About Meiko", client.user.avatarURL)
            .setThumbnail(client.user.avatarURL)
            .setDescription("**Meiko** is a multipurpose bot developed by **Kodehawa#3457** with the sole purpose of fun and games!\n" +
                `To start, type \`${meiko.config.prefix}help\``)
            .addField("Uptime", humanizeDuration(client.uptime, {round: true}), false)                  
            .addField("Meiko Version", "0.0.1", false)                            
            .addField("Guilds", client.guilds.size, true)
            .addField("Users", client.users.size, true)
            .addField("Text Channels", client.channels.filter(c => c.type === "text").size, true)
            .addField("Voice Channels", client.channels.filter(c => c.type === "voice").size, true)            
            .setFooter(`Commands: ${meiko.commands.size} | Commands this session: ${meiko.timesCommandsRan}`, client.user.avatarURL)

        await context.channel.send({embed})
    }
};