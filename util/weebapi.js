const snekfetch = require("snekfetch")

module.exports = async (type) => {
    return snekfetch.get(`https://rra.ram.moe/i/r?type=${type}`)
        .then(r =>{
            return `https://rra.ram.moe${r.body.path}`
        })
        .catch(err => {
            console.log(err)
            return undefined
        });
}