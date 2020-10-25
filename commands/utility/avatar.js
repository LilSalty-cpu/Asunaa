const Discord = require("discord.js")

module.exports = {
    name: "avatar",
    category: "utility",
    description: "Envoie l'avatar",
    usage: "[commande | user] ou [commande]",
    run: async(client, message, args) => {

        //command

        /* If user isnt found it selects ur profile */
        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === args.slice(0).join(' ') || x.user.username === args[0]) || message.member;

        if (!member.user.avatarURL) return message.channel.send(`Cette utilisateur n'a pas d'avatar`);

        const avatar = new Discord.MessageEmbed()
            .setTitle(`${member.user.username} Avatar`)
            .setColor("#c9c084")
            .setImage(member.user.avatarURL())
            .setURL(member.user.avatarURL())
        message.channel.send(avatar)
            // If bot doesnt have embed perms 
            .catch(() => message.channel.send("**Erreur:** Je n'ai pas les permissions"));

    }

};