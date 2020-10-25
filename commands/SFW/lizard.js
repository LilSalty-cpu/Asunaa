const client = require('nekos.life');
const Discord = require('discord.js')
const neko = new client();

module.exports = {
  name: "lizard",
  category: "SFW",
  description: "Envoie une image au hasard de lézard",
  usage: "[commande]",
  run: async (client, message, args) => {
  //command

        async function work() {
        let owo = (await neko.sfw.lizard());

        const lizard = new Discord.MessageEmbed()
        .setTitle("Random Lézard Image")
        .setImage(owo.url)
        .setColor(`#c9c084`)
        .setURL(owo.url);
        message.channel.send(lizard);

}

      work();
}
                };