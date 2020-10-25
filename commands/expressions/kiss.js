const client = require('nekos.life');
const Discord = require('discord.js')
const neko = new client();
const utils = require('../../utils');

module.exports = {
  name: "kiss",
  category: "expressions",
  description: "Fait un bisous",
  usage: "[commande] + [utilisateur]",
  run: async (client, message, args) => {
  //command

        const user = message.mentions.users.first();
        if(!user)
        return message.reply("Mentionne quelqu'un pour lui faire un bisous");

        async function work() {
        let owo = (await neko.sfw.kiss());

        const kissembed = new Discord.MessageEmbed()
        .setTitle(user.username + " Vous avez été embrassé! ")
        .setDescription((user.toString() + " a reçu un bisous de " + message.author.toString()))
        .setImage(owo.url)
        .setColor(`#c9c084`)
        .setURL(owo.url);
        message.channel.send(kissembed);

}

      work();
}
                };