let meiko = require("./meiko.js");
let prefix = meiko.config.prefix;
let Category = require("./commands/base/category");

exports.listen = (client, utils) => {
    client.on('message', ctx => {
        if(ctx.content.startsWith(prefix)){
            let parts = ctx.content.slice(prefix.length).split(" ")
            let command = parts[0]
            let content = ctx.content.replace(prefix + command, "")
            meiko.timesCommandsRan++
            try{
                let executedCommand = meiko.commands.get(command)
                if(executedCommand === undefined) return
                
                if(executedCommand.category === Category.type.OWNER){
                    if(ctx.author.id !== meiko.config.ownerId){
                        ctx.channel.send(":warning: This command is owner-only!")
                        return
                    }
                }
                executedCommand.execute(meiko, content, ctx)
            } catch (err){
                console.log(err);
            }
        } 
    });

    client.on(`ready`, async () => {
        utils.simple(`Logged in. Visible Guilds: ${client.guilds.size}, Users: ${client.users.size} \o/`)
        utils.simple(`Loaded ${meiko.commands.size} commands!`)
        await client.user.setGame("<3");
    })
}