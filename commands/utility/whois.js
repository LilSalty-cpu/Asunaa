    const Discord = require("discord.js")

    module.exports = {
    name: "whois",
	aliases: ["info"],
    category: "utility",
    description: "Avoir les informations a propros d'un utilisateur",
    usage: "[commande | utilisateur] or [commande]",
    run: async (client, message, args) => {
    //command
    
{
    const user = message.mentions.users.first();
    if(!user)
        return message.reply('Please mention the user who you want info about.');
    
    var playing = ("[ " + user.presence.activities + " ]")
    
    const whothefuq = new Discord.MessageEmbed()
          .setTitle("User Info:")
          .addField("Nom entier", `${user.tag}`)
          .addField("ID", user.id)
          .addField("En train de jouer",playing, true)
          .addField("Status", `${user.presence.status}`, true)
          .addField("A rejoins discord le ", user.createdAt)
          .setColor("#c9c084")
          .setTimestamp()
          .setThumbnail(user.avatarURL())  
      message.channel.send(whothefuq)

    };
    }
       
  
    
    };