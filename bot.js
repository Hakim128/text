const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("680774836410384419")
setInterval(function() {
channel.send(`حط الكلام اللي تبغاه هنا fgfgfdgfdhthfghtrytrythsrthtb`);
}, 20)
})

client.login(process.env.BOT_TOKEN);