const snekfetch = require("snekfetch")

module.exports = async function(url, callback, error) {
    await snekfetch.get(url)
    .then(r =>{
        callback(r.body)
    })
    .catch(err => {
        error(err)
        console.log(err)
    });
}