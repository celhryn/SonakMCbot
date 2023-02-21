const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
const token = config.token;

client.on("message", message => {
  if (message.content.startsWith("$help")) {
    if (message.member.hasPermission("ADMINISTRATOR")) {
      const embed = new Discord.MessageEmbed()
        .setTitle("Liste des commandes")
        .setDescription("Voici la liste des commandes disponibles :")
        .addField("$ban [utilisateur] [raison]", "Bannir un membre du serveur")
        .addField("$kick [utilisateur] [raison]", "Expulser un membre du serveur")
        .addField("$addrole [utilisateur] [rôle]", "Ajouter un rôle à un membre du serveur")
        .addField("$mute [utilisateur]", "Muter un membre du serveur")
        .addField("$say [message]", "Envoyer un message en tant que bot")
        .addField("$announce [message] [ping (optionnel)] [image (optionnel)]", "Envoyer une annonce en embed message avec option de ping et image")
        .setColor("#0099ff")
        .setThumbnail(message.guild.iconURL())
        .setFooter("Bot SonakMC développé par Celhryn");
      message.channel.send(embed);
    } else {
      message.reply("Vous n'avez pas la permission d'utiliser cette commande.");
    }
  }
});
