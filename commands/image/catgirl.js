const Command = require("../base/command");
const Category = require("../base/category");
const Requester = require("../../util/requester")

module.exports = class Catgirl extends Command {
    constructor(){
        super({
            name: "catgirl",
            category: Category.type.IMAGE
        })
    }

    async execute(meiko, content, context){
        let nsfw = false;
        let url = `http://nekos.life/api/neko`
        if(content === "nsfw"){
            if(!context.channel.nsfw){
                context.channel.send("H-Hey, I cannot send lewd pictures if the channel isn't marked as NSFW!")
                return                
            }

            url = `http://nekos.life/api/lewd/neko`
        }

        await Requester(url, (response) => {
            const embed = new meiko.Discord.RichEmbed()
                .setTitle("N-Nya~")
                .setImage(response.neko)
            
            context.channel.send({embed}) 
        }, (err) => {
            console.log(err)
        })
    }
}