const client = require('nekos.life');
const Discord = require('discord.js')
const neko = new client();

module.exports = {
  name: "goose",
  category: "SFW",
  description: "Envoie une image d'OIE",
  usage: "[commande]",
  run: async (client, message, args) => {
  //command

        async function work() {
        let owo = (await neko.sfw.goose());

        const goose = new Discord.MessageEmbed()
        .setTitle("Random image d'OIE")
        .setImage(owo.url)
        .setColor(`#c9c084`)
        .setURL(owo.url);
        message.channel.send(goose);

}

      work();
}
                };