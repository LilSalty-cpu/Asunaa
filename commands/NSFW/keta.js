const client = require('nekos.life');
const Discord = require('discord.js')
const neko = new client();

module.exports = {
  name: "keta",
  category: "NSFW",
  usage: "[commande]",
  run: async (client, message, args) => {
  //command

  //Checks channel for nsfw
  var errMessage = "Ce n'est pas un salon NSFW !";
  if (!message.channel.nsfw) {
      message.react('⚠️');

      return message.reply(errMessage)
      .then(msg => {
      msg.delete({ timeout: 3000 })
      })
      
  }

        async function work() {
        let owo = (await neko.nsfw.keta());

        const keta = new Discord.MessageEmbed()
        .setTitle("Keta")
        .setImage(owo.url)
        .setColor(`#c9c084`)
        .setURL(owo.url);
        message.channel.send(keta);

}

      work();
}
                };