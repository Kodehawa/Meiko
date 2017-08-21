const Command = require("../base/command");
const Category = require("../base/category");

module.exports = class Avatar extends Command {
    constructor(){
        super({
            name: "avatar",
            category: Category.type.UTILS
        })
    }

    async execute(meiko, content, context){
        let user = context.author;

        if(context.mentions.users.size > 0){
            user = context.mentions.users.first()
        }

        const avatarUrl = user.avatarURL.replace(".gif?size=2048", ".gif")
        const embed = new meiko.Discord.RichEmbed()
            .setTitle(`${user.username}'s Avatar`)
            .setImage(avatarUrl)

        console.log(avatarUrl)

        await context.channel.send({embed})
    }
}