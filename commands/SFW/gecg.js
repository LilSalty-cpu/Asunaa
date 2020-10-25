const client = require('nekos.life');
const Discord = require('discord.js')
const neko = new client();

module.exports = {
  name: "gecg",
  category: "SFW",
  description: "Catgirl génétiquement modifiés",
  usage: "[commande]",
  run: async (client, message, args) => {
  //command

        async function work() {
        let owo = (await neko.sfw.gecg());

        const wtf = new Discord.MessageEmbed()
        .setTitle("Catgirl génétiquement modifiés")
        .setImage(owo.url)
        .setColor(`#c9c084`)
        .setURL(owo.url);
        message.channel.send(wtf);

}

      work();
}
                };