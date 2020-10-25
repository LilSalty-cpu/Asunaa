const client = require('nekos.life');
const Discord = require('discord.js')
const neko = new client();

module.exports = {
  name: "nekogif",
  category: "SFW",
  description: "Envoie un random NEKO gif",
  usage: "[commandz]",
  run: async (client, message, args) => {
  //command

        async function work() {
        let owo = (await neko.sfw.nekoGif());

        const nekogif = new Discord.MessageEmbed()
        .setTitle("Random Neko Gif")
        .setImage(owo.url)
        .setColor(`#c9c084`)
        .setURL(owo.url);
        message.channel.send(nekogif);

}

      work();
}
                };