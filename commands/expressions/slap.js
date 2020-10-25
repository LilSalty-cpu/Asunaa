const client = require('nekos.life');
const Discord = require('discord.js')
const neko = new client();
const utils = require('../../utils');

module.exports = {
  name: "slap",
  category: "expressions",
  description: "gifle un utilisateur",
  usage: "[commande] + [utilisateur]",
  run: async (client, message, args) => {
  //command

        const user = message.mentions.users.first();
        if(!user)
        return message.reply("Mentionne quelqu'un pour le gifler");

        async function work() {
        let owo = (await neko.sfw.slap());

        const slapemebd = new Discord.MessageEmbed()
        .setTitle(user.username + " Tu as été giflé ")
        .setDescription((user.toString() + " a été giflé par" + message.author.toString()))
        .setImage(owo.url)
        .setColor(`#c9c084`)
        .setURL(owo.url);
        message.channel.send(slapemebd);

}

      work();
}
                };