var figlet = require('figlet');
const utils = require('../../utils');

module.exports = {
  name: "ascii",
  category: "fun",
description: "Convertis ton texte en ASCII",
usage: "[commande | ton texte]",
run: async (client, message, args) => {
//command
var maxLen = 100 // Kendiniz en y�ksek harf sayisini ayarlayabilirsiniz
  
  if(args.join(' ').length > maxLen) return message.channel.send(`La longeur maximale est ${maxLen}!`) 
  
  if(!args[0]) return message.channel.send('Il faut entrer un texte (max100)');
  
  figlet(`${args.join(' ')}`, function(err, data) {
      if (err) {
          console.log('k...');
          console.dir(err);
          return;
      }

      message.channel.send(`${data}`, {code: 'AsciiArt'});
  });

}
};