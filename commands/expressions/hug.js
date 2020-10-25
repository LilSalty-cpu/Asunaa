const client = require('nekos.life');
const Discord = require('discord.js')
const neko = new client();
const utils = require('../../utils');

module.exports = {
  name: "hug",
  category: "expressions",
  description: "embrasse un utilisateur mentionné",
  usage: "[commande] + [utilisateur]",
  run: async (client, message, args) => {
  //command

        const user = message.mentions.users.first();
        if(!user)
        return message.reply("Mentionne quelqu'un pour l'embrasser");

        async function work() {
        let owo = (await neko.sfw.hug());

        const hugembed = new Discord.MessageEmbed()
        .setTitle(user.username + " Vous avez été embrasser ")
        .setDescription((user.toString() + " a été embrasser par " + message.author.toString()))
        .setImage(owo.url)
        .setColor(`#c9c084`)
        .setURL(owo.url);
        message.channel.send(hugembed);

}

      work();
}
                };