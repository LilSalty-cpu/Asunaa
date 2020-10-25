const client = require('nekos.life');
const Discord = require('discord.js')
const neko = new client();

module.exports = {
  name: "dog",
  category: "SFW",
  description: "Envoie des images de chiens",
  usage: "[commande]",
  run: async (client, message, args) => {
  //command

        async function work() {
        let owo = (await neko.sfw.woof());

        const dog = new Discord.MessageEmbed()
        .setTitle("Random Image de Chien")
        .setImage(owo.url)
        .setColor(`#c9c084`)
        .setURL(owo.url);
        message.channel.send(dog);

}

      work();
}
                };