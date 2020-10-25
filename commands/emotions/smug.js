const client = require('nekos.life');
const Discord = require('discord.js')
const neko = new client();
const utils = require('../../utils');

module.exports = {
  name: "smug",
  category: "emotions",
  description: "Montre comment tu es souriant",
  usage: "[commande]",
  run: async (client, message, args) => {
  //command

        async function work() {
        let owo = (await neko.sfw.smug());

        const smug = new Discord.MessageEmbed()
        .setTitle("Quelqu'un est souriant")
        .setDescription(( message.author.toString() + " is smug "))
        .setImage(owo.url)
        .setColor(`#c9c084`)
        .setURL(owo.url);
        message.channel.send(smug);

}

      work();
}
                };