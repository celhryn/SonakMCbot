const Discord = require("discord.js");
const client = new Discord.Client();
let welcomeChannel;

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("guildMemberAdd", member => {
  // Vérifiez si un canal de bienvenue a été défini
  if (welcomeChannel) {
    // Récupérer le nombre de membres sur le serveur
    const members = member.guild.members.cache.filter(member => !member.user.bot);
    const memberCount = members.size;

    // Envoyer un message de bienvenue avec le nombre de membres sur le serveur
    welcomeChannel.send(`Bienvenue sur SonakMC, ${member} ! Tu es le ${memberCount}ème membre sur le Discord !`);

    // Envoyer l'image de profil du membre
    const attachment = new Discord.MessageAttachment(member.user.displayAvatarURL({ format: "png", dynamic: true }));
    welcomeChannel.send(attachment);
  }
});

client.on("message", message => {
  if (message.content.startsWith("$setwelcome")) {
    // Vérifiez si l'utilisateur qui a exécuté la commande dispose des autorisations appropriées
    if (!message.member.hasPermission("ADMINISTRATOR")) {
      return message.reply("Vous n'avez pas la permission d'exécuter cette commande.");
    }

    // Définissez le canal de bienvenue sur le canal mentionné dans la commande
    welcomeChannel = message.mentions.channels.first();

    // Envoyez un message de confirmation
    message.channel.send(`Le canal de bienvenue a été défini sur ${welcomeChannel} !`);
  }
});

client.login(MTA3MzM5NjQxMDM0MDM1NjE3Ng.GKWUJ9.xx-qdmUT4rzaU-_ViJ3cFHUDnEgkE2GLpg3QAY);