const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", message => {
  if (message.content.startsWith("$say")) {
    // Vérifiez si l'utilisateur qui a exécuté la commande dispose des autorisations appropriées
    if (!message.member.hasPermission("ADMINISTRATOR")) {
      return message.reply("Vous n'avez pas la permission d'exécuter cette commande.");
    }

    // Récupérez le message à envoyer à la place du bot
    const messageContent = message.content.slice(4);

    // Envoyez le message à la place du bot
    message.channel.send(messageContent);
  }
});

client.login(MTA3MzM5NjQxMDM0MDM1NjE3Ng.GKWUJ9.xx-qdmUT4rzaU-_ViJ3cFHUDnEgkE2GLpg3QAY);