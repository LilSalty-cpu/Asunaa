const client = require('nekos.life');
const Discord = require('discord.js')
const neko = new client();

module.exports = {
  name: "cat",
  category: "SFW",
  description: "Envoie des images de chat",
  usage: "[commande]",
  run: async (client, message, args) => {
  //command

        async function work() {
        let owo = (await neko.sfw.meow());

        const cat = new Discord.MessageEmbed()
        .setTitle("Random image de chat")
        .setImage(owo.url)
        .setColor(`#c9c084`)
        .setURL(owo.url);
        message.channel.send(cat);

}

      work();
}
                };