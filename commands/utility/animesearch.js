const Discord = require("discord.js");
const malScraper = require('mal-scraper');

module.exports = {
  name: "animesearch",
  category: "utility",
description: "Informations a propros d'un anime",
usage: "[commande | Nom d'Anime]",
run: async (client, message, args) => {
//command
const search = `${args}`;
if(!search)
return message.reply('Veuillez ajouter une requête de recherche. Si la commande est non valide, elle ne fonctionnera pas.');

malScraper.getInfoFromName(search)
  .then((data) => {
  const malEmbed = new Discord.MessageEmbed()
    .setAuthor(`My Anime List recherche les résultats pour ${args}`.split(',').join(' '))
    .setThumbnail(data.picture)
    .setColor('#c9c084') //I personally use bubblegum pink!
    .addField('Titre Anglais', data.englishTitle, true)
    .addField('Titre Japonais', data.japaneseTitle, true)
    .addField('Type', data.type, true)
    .addField('Episodes', data.episodes, true)
    .addField('Notes', data.rating, true)
    .addField('Diffuser', data.aired, true)
    .addField('Score', data.score, true)
    .addField('Score Stats', data.scoreStats, true)
    .addField('Lien', data.url);

    message.channel.send(malEmbed);

  })
}
};