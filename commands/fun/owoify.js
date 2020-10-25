const client = require('nekos.life');
const Discord = require('discord.js')
const neko = new client();
const utils = require('../../utils');

module.exports = {
name: "owoify",
category: "fun",
description: "owoifys texte",
usage: "[commande | ton texte]",
run: async (client, message, args) => {
//command
async function work() {

  let coolusertext = args.join(" ");
    if (!coolusertext) return message.channel.send('Veuillez taper du texte à owoify.')
    if (coolusertext.length > 200) return message.channel.send(`Je ne peux owoify ton texte, il fait plus de 200 caractères.`)
  
          let owo = await neko.sfw.OwOify({text: coolusertext});
          message.channel.send(owo.owo).catch(error => {
              console.error(error);
          });
  
        }
  
        work();
}
};