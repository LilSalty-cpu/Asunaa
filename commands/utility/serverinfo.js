const Discord = require("discord.js");

module.exports = {
  name: "serverinfo",
  category: "utility",
description: "Information sur le serveur",
usage: "[commande]",
run: async (client, message, args) => {
//command
let servericon = message.guild.iconURL;
let serverembed = new Discord.MessageEmbed()
.setTitle("Serveur Information")
.setColor("#c9c084")
.setThumbnail(servericon)
.addField("Server Name", message.guild.name)
.addField("Owner", `${message.guild.owner.user.username}#${message.guild.owner.user.discriminator}`, true)
.addField("Channels", message.guild.channels.cache.size, true)
.addField("Roles", message.guild.roles.cache.size, true)
.addField("Creer le", message.guild.createdAt)
.addField("Tu as rejoins le ", message.member.joinedAt)
.addField("Membre total", message.guild.memberCount)
.setThumbnail(message.guild.iconURL())
.setTimestamp()
.setFooter(message.author.username, message.author.avatarURL);
message.channel.send(serverembed);
}
};