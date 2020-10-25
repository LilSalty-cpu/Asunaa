const client = require('nekos.life');
const Discord = require('discord.js')
const neko = new client();
const utils = require('../../utils');

module.exports = {
  name: "feed",
  category: "expressions",
  description: "Donne a manger a quelqu'un",
  usage: "[commande] + [utilisateur]",
  run: async (client, message, args) => {
  //command

        const user = message.mentions.users.first();
        if(!user)
        return message.reply("Mentionner quelqu'un pour le nourrir");

        async function work() {
        let owo = (await neko.sfw.feed());

        const feedembed = new Discord.MessageEmbed()
        .setTitle(user.username + " Tu as bien été nourris ")
        .setDescription((user.toString() + "a été nourri par" + message.author.toString()))
        .setImage(owo.url)
        .setColor(`#c9c084`)
        .setURL(owo.url);
        message.channel.send(feedembed);

}

      work();
}
                };