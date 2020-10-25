const client = require('nekos.life');
const Discord = require('discord.js')
const neko = new client();

module.exports = {
  name: "animalears",
  category: "SFW",
  description: "Kemonomimi",
  usage: "[commande]",
  run: async (client, message, args) => {
  //command

        async function work() {
        let owo = (await neko.sfw.kemonomimi());

        const animalears = new Discord.MessageEmbed()
        .setTitle("Kemonomimi")
        .setImage(owo.url)
        .setColor(`#c9c084`)
        .setURL(owo.url);
        message.channel.send(animalears);

}

      work();
}
                };