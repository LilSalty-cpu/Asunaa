const { MessageEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");
const utils = require('../../utils');

module.exports = {
    name: "help",
    aliases: ["h"],
    category: "info",
    description: "Renvoie toutes les commandes ou une information de commande spécifique",
    usage: "[commande | alias]",
    run: async (client, message, args) => {
        // If there's an args found
        // Send the info of that command found
        // If no info found, return not found embed.
        if (args[0]) {
            return getCMD(client, message, args[0]);
        } else {
            // Otherwise send all the commands available
            // Without the cmd info
            return getAll(client, message);
        }
    }
}

function getAll(client, message) {
    const embed = new MessageEmbed()
        .setColor("#c9c084")
        .setThumbnail("https://media.discordapp.net/attachments/769973890767388732/769981967185346640/oe.jpg")
        .setTitle("Menu d'aide")
        .setFooter("Pour voir la description des commandes, tapes '.help' [CMD Name]")
        
    // Map all the commands
    // with the specific category
    const commands = (category) => {
        return client.commands
            .filter(cmd => cmd.category === category)
            .map(cmd => `\`${cmd.name}\``)
            .join(", ");
    }

    // Map all the categories
    const info = client.categories
        .map(cat => stripIndents`**${cat[0].toUpperCase() + cat.slice(1)}** \n${commands(cat)}`)
        .reduce((string, category) => string + "\n" + category);

        message.reply('Regarde tes DM')

        

    return message.author.send(embed.setDescription(info));
    
}

function getCMD(client, message, input) {
    const embed = new MessageEmbed()

    // Get the cmd by the name or alias
    const cmd = client.commands.get(input.toLowerCase()) || client.commands.get(client.aliases.get(input.toLowerCase()));
    
    let info = `Aucune information trouvée pour la commande **${input.toLowerCase()}**`;

    // If no cmd is found, send not found embed
    if (!cmd) {
        return message.channel.send(embed.setColor("#c9c084").setDescription(info));
    }

    // Add all cmd info to the embed
    if (cmd.name) info = `**Commande name**: ${cmd.name}`;
    if (cmd.aliases) info += `\n**Alias**: ${cmd.aliases.map(a => `\`${a}\``).join(", ")}`;
    if (cmd.description) info += `\n**Description**: ${cmd.description}`;
    if (cmd.usage) {
        info += `\n**Usage**: ${cmd.usage}`;
        embed.setFooter(`Syntaxe: <> = obligatoire, [] = optionel`);
    }

    return message.channel.send(embed.setColor("#c9c084").setDescription(info));
}