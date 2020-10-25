const client = require('nekos.life');
const Discord = require('discord.js')
const neko = new client();

module.exports = {
  name: "wallpaper",
  category: "SFW",
  description: "Envoie un wallpaper au hasard",
  usage: "[commande]",
  run: async (client, message, args) => {
  //command

        async function work() {
        let owo = (await neko.sfw.wallpaper());

        const wallpaper = new Discord.MessageEmbed()
        .setTitle("Random Wallpaper")
        .setImage(owo.url)
        .setColor(`#c9c084`)
        .setURL(owo.url);
        message.channel.send(wallpaper);

}

      work();
}
                };