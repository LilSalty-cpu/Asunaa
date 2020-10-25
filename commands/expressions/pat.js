const client = require('nekos.life');
const Discord = require('discord.js')
const neko = new client();
const utils = require('../../utils');

module.exports = {
  name: "pat",
  category: "expressions",
  description: "caresse un utilisateur",
  usage: "[commande] + [utilisateur]",
  run: async (client, message, args) => {
  //command

        const user = message.mentions.users.first();
        if(!user)
        return message.reply("Mentionne quelqu'un pour le caresser");

        async function work() {
        let owo = (await neko.sfw.pat());

        const patembed = new Discord.MessageEmbed()
        .setTitle(user.username + " !!! ")
        .setDescription((user.toString() + " a été caressé par " + message.author.toString()))
        .setImage(owo.url)
        .setColor(`#c9c084`)
        .setURL(owo.url);
        message.channel.send(patembed);

}

      work();
}
                };