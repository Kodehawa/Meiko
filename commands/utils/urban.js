const Command = require("../base/command");
const Category = require("../base/category");
const snekfetch = require("snekfetch")

module.exports = class Urban extends Command {
    constructor(){
        super({
            name: "urban",
            category: Category.type.UTILS
        })
    }

    async execute(meiko, content, context){
        await snekfetch.get(`http://api.urbandictionary.com/v0/define?term=${content}`)
        .then(r =>{
            let def = r.body.list[0]
            const embed = new meiko.Discord.RichEmbed()
                .setTitle("Urban Dictionary")
                .setThumbnail("https://everythingfat.files.wordpress.com/2013/01/ud-logo.jpg")
                .setDescription(`**Definition for ${def.word}**\n` + (def.definition.length > 1500 ? def.definition.substring(0, 1500) + "..." : def.definition))
                .addField("Example", def.example.length > 1020 ? def.example.substring(0, 1020) + "..." : def.example, false)
                .addField("Thumbs up", def.thumbs_up, true)
                .addField("Thumbs down", def.thumbs_down, true)
                
            context.channel.send({embed})    
        })
        .catch(err => {
            context.channel.send("Something went wrong while looking for the term ;-;")
            console.log(err)
        });
    }
}