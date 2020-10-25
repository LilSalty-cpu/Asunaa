const client = require('nekos.life');
const Discord = require('discord.js')
const neko = new client();
const utils = require('../../utils');

module.exports = {
  name: "poke",
  category: "expressions",
  description: "Pousse un utilisateur mentionné",
  usage: "[commande] + [utilisateur]",
  run: async (client, message, args) => {
  //command

        const user = message.mentions.users.first();
        if(!user)
        return message.reply("Mentionne quelqu'un pour le pousser");

        async function work() {
        let owo = (await neko.sfw.poke());

        const pokeembed = new Discord.MessageEmbed()
        .setTitle(user.username + " Tu as été poussé ")
        .setDescription((user.toString() + " a été poussé par " + message.author.toString()))
        .setImage(owo.url)
        .setColor(`#c9c084`)
        .setURL(owo.url);
        message.channel.send(pokeembed);

}

      work();
}
                };