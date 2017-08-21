let Category = require("./category");
module.exports = class Command {
    constructor(params = {}){
        if (!params.name) throw new Error('All command must have a name!');
        if (typeof params.name !== 'string') throw new Error('The name must be a String!');
        this.name = params.name;
        this.category = params.category;
    }
}