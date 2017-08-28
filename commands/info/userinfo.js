const Command = require("../base/command");
const Category = require("../base/category");

module.exports = class UserInfo extends Command {
    constructor(){
        super({
            name: "userinfo",
            category: Category.type.INFO
        })
    }

    async execute(meiko, content, context){
        let member = context.member
        let author = context.author

        if(context.mentions.members.size >= 1){
            member = context.mentions.members.first();
            author = context.mentions.users.first();
        }

        const embed = new meiko.Discord.RichEmbed()
            .setAuthor(`User Information`, author.avatarURL)
            .setDescription(`User information for ${member.displayName}`)
            .setThumbnail(author.avatarURL)
            .addField("ID", member.id, false)
            .addField("Created", author.createdAt.toDateString(), true) 
            .addField("Join Date", member.joinedAt.toDateString(), true)           
            .addField("Color", member.colorRole.hexColor, true)
            .addField("Voice Channel", member.voiceChannel === undefined ? "None" : member.voiceChannel.name)
            .addField("Roles", member.roles.map(r => r.name).reverse().join(", "), false)
    
        await context.channel.send({embed})
    }
}