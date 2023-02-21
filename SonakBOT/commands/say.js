const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
const token = config.token;

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

client.login(token);
