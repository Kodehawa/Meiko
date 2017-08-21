const Command = require("../base/command");
const Category = require("../base/category");

module.exports = class Ping extends Command {
    constructor(){
        super({
            name: "ping",
            category: Category.type.INFO
        })
    }

    async execute(meiko, content, context){
        await context.channel.send(`Pinging...`).then(sent => {
            sent.edit(`**Ping:** \`${sent.createdTimestamp - context.createdTimestamp}ms\` | **Weebsocket:** \`${meiko.client.ping}ms\``);
        })
    }
}