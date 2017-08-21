exports.Discord = require('discord.js')
exports.client = new this.Discord.Client({disableEveryone: true})
exports.utils = require("./util/utils")
exports.config = require('./conf/config.json')
exports.commands = new this.Discord.Collection()
exports.timesCommandsRan = 0

this.client.login(this.config.token)
require("./util/loader.js").registerCommands()
require("./listeners").listen(this.client, this.utils)

String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}