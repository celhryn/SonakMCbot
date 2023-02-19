const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", message => {
  if (message.content === "$addrole") {
    // Vérifiez si l'utilisateur qui a exécuté la commande dispose des autorisations appropriées
    if (!message.member.hasPermission("MANAGE_ROLES")) {
      return message.reply("Vous n'avez pas la permission de gérer les rôles.");
    }

    // Récupérez le premier utilisateur mentionné dans le message
    const user = message.mentions.users.first();

    // Vérifiez si un utilisateur a été mentionné
    if (!user) {
      return message.reply("Vous devez mentionner un utilisateur.");
    }

    // Récupérez le premier rôle mentionné dans le message
    const role = message.mentions.roles.first();

    // Vérifiez si un rôle a été mentionné
    if (!role) {
      return message.reply("Vous devez mentionner un rôle à ajouter à l'utilisateur.");
    }

    // Ajoutez le rôle à l'utilisateur mentionné
    const member = message.guild.member(user);
    member.roles.add(role)
      .then(() => message.reply(`Le rôle ${role.name} a été ajouté avec succès à ${user.tag}.`))
      .catch(error => message.reply(`Je suis désolé, je n'ai pas pu ajouter le rôle. Raison : ${error}`));
  }
});

client.login(MTA3MzM5NjQxMDM0MDM1NjE3Ng.GKWUJ9.xx-qdmUT4rzaU-_ViJ3cFHUDnEgkE2GLpg3QAY);