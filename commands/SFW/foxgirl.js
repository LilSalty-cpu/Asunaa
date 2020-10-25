const client = require('nekos.life');
const Discord = require('discord.js')
const neko = new client();

module.exports = {
  name: "foxgirl",
  category: "SFW",
  description: "Envoie des images au hasard de Filles-Renards",
  usage: "[commande]",
  run: async (client, message, args) => {
  //command

        async function work() {
        let owo = (await neko.sfw.foxGirl());

        const foxGirl = new Discord.MessageEmbed()
        .setTitle("Random Filles-Renards")
        .setImage(owo.url)
        .setColor(`#c9c084`)
        .setURL(owo.url);
        message.channel.send(foxGirl);

}

      work();
}
                };