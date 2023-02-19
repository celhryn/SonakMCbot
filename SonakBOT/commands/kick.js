const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", message => {
  if (message.content === "$kick") {
    // Vérifiez si l'utilisateur qui a exécuté la commande dispose des autorisations appropriées
    if (!message.member.hasPermission("KICK_MEMBERS")) {
      return message.reply("Vous n'avez pas la permission de kick cette personne.");
    }

    // Récupérez le premier utilisateur mentionné dans le message
    const user = message.mentions.users.first();

    // Vérifiez si un utilisateur a été mentionné
    if (!user) {
      return message.reply("Vous devez mentionner un utilisateur à kick.");
    }

    // Vérifiez si vous ne pouvez pas kicker l'utilisateur mentionné
    if (user.id === message.author.id) {
      return message.reply("Vous ne pouvez pas kick cet utilisateur.");
    }

    // Kicker l'utilisateur mentionné
    const member = message.guild.member(user);
    member
      .kick("Kick par un utilisateur du bot.")
      .then(() => message.reply(`${user.tag} a été kick avec succès.`))
      .catch(error => message.reply(`Je suis désolé, je n'ai pas pu kick l'utilisateur. Raison : ${error}`));
  }
});

client.login(MTA3MzM5NjQxMDM0MDM1NjE3Ng.GKWUJ9.xx-qdmUT4rzaU-_ViJ3cFHUDnEgkE2GLpg3QAY);