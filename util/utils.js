module.exports = class Utils {
    static log(level, content) {
        console.log(level, content)
    }
    
    static simple(content) {
        console.log(`\n\x1b[45m\x1b[30m[BOT]\x1b[0m ${content}`);
    }
}