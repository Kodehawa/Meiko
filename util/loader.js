const { readdir } = require('fs');
const log = require('./utils.js');
const Discord = require('discord.js');
const meiko = require("../meiko.js");

//Thanks wizard <3
exports.registerCommands = () => {
    readdir('./commands/', (err, files) => {
        if (err) return log1(err.stack, err)
        files.forEach(f => {
            readdir(`./commands/${f}`, (error, filez) => {
                if(!filez) return;
                if(f !== `base`) {
                    if(error) return log.simple(error.stack, error);
                    filez.forEach(c => {
                        const CommandClass = require(`../commands/${f}/${c}`);
                        let cmd = new CommandClass();
                        meiko.commands.set(cmd.name, cmd);
                    });
                }
            });
        });
    });
}
