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
        console.log(context)
    }
}