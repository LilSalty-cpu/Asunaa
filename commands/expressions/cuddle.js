const client = require('nekos.life');
const Discord = require('discord.js')
const neko = new client();
const utils = require('../../utils');

module.exports = {
  name: "cuddle",
  category: "expressions",
  description: "Caresse quelqu'un",
  usage: "[commande] + [utilisateur]",
  run: async (client, message, args) => {
  //command

        const user = message.mentions.users.first();
        if(!user)
        return message.reply("Mentionne quelqu'un a caliner");

        async function work() {
        let owo = (await neko.sfw.cuddle());

        const cuddleembed = new Discord.MessageEmbed()
        .setTitle(user.username + " Vous venez de faire un câlin! ")
        .setDescription((user.toString() + " a reçu un câlins " + message.author.toString()))
        .setImage(owo.url)
        .setColor(`#c9c084`)
        .setURL(owo.url);
        message.channel.send(cuddleembed);

}

      work();
}
                };