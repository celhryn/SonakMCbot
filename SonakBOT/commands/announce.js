const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", message => {
  if (message.content.startsWith("$announce")) {
    // Vérifiez si l'utilisateur qui a exécuté la commande dispose des autorisations appropriées
    if (!message.member.hasPermission("ADMINISTRATOR")) {
      return message.reply("Vous n'avez pas la permission d'exécuter cette commande.");
    }

    // Récupérez le contenu de l'annonce et l'image de l'annonce
    const [content, image] = message.content.slice(9).split("|");

    // Vérifiez si l'utilisateur souhaite mentionner tous les membres du serveur
    const shouldMention = content.startsWith("@everyone") || content.startsWith("@here");

    // Créez un nouvel objet Embed
    const embedMessage = new Discord.MessageEmbed()
      .setColor("#0099ff")
      .setDescription(`${content}\n\nBot SonakMC développé par Celhryn`)
      .setTimestamp();

    // Ajoutez l'image si elle est fournie
    if (image) {
      embedMessage.setImage(image);
    }

    // Envoyez le message embed dans le canal où la commande a été exécutée
    message.channel.send(shouldMention ? "@everyone" : "", embedMessage);
  }
});

client.login(MTA3MzM5NjQxMDM0MDM1NjE3Ng.GKWUJ9.xx-qdmUT4rzaU-_ViJ3cFHUDnEgkE2GLpg3QAY);
