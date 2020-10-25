const client = require('nekos.life');
const Discord = require('discord.js')
const neko = new client();
const utils = require('../../utils');

module.exports = {
  name: "tickle",
  category: "expressions",
  description: "chatouille un utilisateur mentionné",
  usage: "[commande] + [utilisateur]",
  run: async (client, message, args) => {
  //command

        const user = message.mentions.users.first();
        if(!user)
        return message.reply("Mentionne quelqu'un pour le chatouiller");

        async function work() {
        let owo = (await neko.sfw.poke());

        const tickleembed = new Discord.MessageEmbed()
        .setTitle(user.username + "Vous avez été chatouillé")
        .setDescription((user.toString() + " a été chatouiller par " + message.author.toString()))
        .setImage(owo.url)
        .setColor(`#c9c084`)
        .setURL(owo.url);
        message.channel.send(tickleembed);

}

      work();
}
                };