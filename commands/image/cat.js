const Command = require("../base/command");
const Category = require("../base/category");
const Requester = require("../../util/requester")

module.exports = class Cat extends Command {
    constructor(){
        super({
            name: "cat",
            category: Category.type.IMAGE
        })
    }

    async execute(meiko, content, context){
        await Requester("http://random.cat/meow", (response) => {
            const embed = new meiko.Discord.RichEmbed()
                .setDescription("**Cats!**")
                .setImage(response.file)
            
            context.channel.send({embed}) 
        }, (err) => {
            console.log(err)
        })
    }
}