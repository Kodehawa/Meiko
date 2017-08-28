class Category {
    constructor(c, l){
        this.name = c
        this.level = l;
    }
}

exports.type = {
    INFO: new Category("Info", 0),
    IMAGE: new Category("Image", 0),    
    FUN: new Category("Fun", 0),
    OWNER: new Category("Owner", -1),
    GAMES: new Category("Games", 0),
    CONF: new Category("Configuration", 1),
    UTILS: new Category("Utils", 0)
}