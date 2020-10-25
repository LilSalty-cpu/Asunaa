const Discord = require('discord.js')
const cooldown = new Set()
const utils = require('../../utils');

module.exports = {
  name: "ratewaifu",
  aliases: ["rate"],
  category: "fun",
  description: "Vous permet de noter un utilisateur ou n'importe qui",
  usage: "[commande | texte/utilisateur]",
run: async (client, message, args) => {
//command
// This command was originally made by RyansHDs#4461.
  // Thank you for letting me use this. -Aaron
  
  if (cooldown.has(message.author.id)) {
    let cooldownemb = new Discord.MessageEmbed()
    .setAuthor(`${message.author.username} Cooldown..`, message.author.displayAvatarURL)
    .setDescription(`Tu dois attendre 5 secondes`)
    .setColor(`#c9c084`)
    .setFooter(`Ce message s'effacera dans 5 secondes`)
    return message.channel.send(cooldownemb).then(message => {
     message.delete(5000) 
    })
    
    }
    cooldown.add(message.author.id);

    setTimeout(() => {
        cooldown.delete(message.author.id);
    }, 10000);
 let m421 = args.join(" ");
  if (!m421) return message.channel.send('Veuillez définir le nom de votre waifus.')
  if (m421.length > 30) return message.channel.send(`Je ne peut pas noter ta waifu`)
  let result = Math.floor((Math.random() * 100) + 0);
  
    const happyrate = new Discord.MessageEmbed()
  .setDescription(`Je noterais **${m421}** ${result}/100 !`)
  .setColor(`#c9c084`)
    
      const sadembed = new Discord.MessageEmbed()
  .setDescription(`Je noterais **${m421}** ${result}/100 !`)
  .setColor(`#c9c084`)
      
        const idkembed = new Discord.MessageEmbed()
  .setDescription(`Je noterais **${m421}** ${result}/100 !`)
  .setColor(`#c9c084`)
        
      const shrugembed = new Discord.MessageEmbed()
  .setDescription(`Je noterais **${m421}** ${result}/100 !`)
  .setColor(`#c9c084`)
                
          const okembed = new Discord.MessageEmbed()
  .setDescription(`Je noterais **${m421}** ${result}/100 !`)
  .setColor(`#c9c084`)
                        
const thumbupembed = new Discord.MessageEmbed()
  .setDescription(`Je noterais **${m421}** ${result}/100 !`)
  .setColor(`#c9c084`)

const eyesembed = new Discord.MessageEmbed()
  .setDescription(`Je noterais **${m421}** ${result}/100 !`)
  .setColor(`#c9c084`)
  
  if (result > 90) return message.channel.send(happyrate)
  if (result < 30) return message.channel.send(sadembed)
  if (result > 40) return message.channel.send(idkembed)
  if (result > 50) return message.channel.send(shrugembed)
  if (result > 60) return message.channel.send(okembed)
  if (result > 70) return message.channel.send(thumbupembed)
  if (result > 80) return message.channel.send(eyesembed)
}
};