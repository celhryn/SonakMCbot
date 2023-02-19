const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", message => {
  if (message.content === "$mute") {
    // Vérifiez si l'utilisateur qui a exécuté la commande dispose des autorisations appropriées
    if (!message.member.hasPermission("MUTE_MEMBERS")) {
      return message.reply("Vous n'avez pas la permission de rendre muet les membres.");
    }

    // Récupérez le premier utilisateur mentionné dans le message
    const user = message.mentions.users.first();

    // Vérifiez si un utilisateur a été mentionné
    if (!user) {
      return message.reply("Vous devez mentionner un utilisateur.");
    }

    // Récupérez le membre de la guilde correspondant à l'utilisateur mentionné
    const member = message.guild.member(user);

    // Vérifiez si le membre existe dans la guilde
    if (!member) {
      return message.reply("Je n'ai pas pu trouver l'utilisateur spécifié dans cette guilde.");
    }

    // Vérifiez si le membre peut être rendu muet
    if (!member.manageable) {
      return message.reply("Je n'ai pas la permission de rendre muet cet utilisateur.");
    }

    // Récupérez le rôle muet de la guilde
    const muteRole = message.guild.roles.cache.find(role => role.name === "Muet");

    // Si le rôle muet n'existe pas, créez-le
    if (!muteRole) {
      message.guild.roles.create({
        data: {
          name: 'Muet',
          permissions: []
        }
      })
        .then(role => {
          message.guild.channels.cache.forEach(channel => {
            channel.updateOverwrite(role, {
              SEND_MESSAGES: false,
              ADD_REACTIONS: false
            });
          });
          member.roles.add(role);
          message.reply(`L'utilisateur ${user.tag} a été rendu muet.`);
        })
        .catch(error => {
          console.error(`Je suis désolé, je n'ai pas pu créer le rôle muet. Raison : ${error}`);
          message.reply("Je suis désolé, je n'ai pas pu rendre muet cet utilisateur.");
        });
    } else {
      // Ajoutez le rôle muet à l'utilisateur mentionné
      member.roles.add(muteRole)
        .then(() => message.reply(`L'utilisateur ${user.tag} a été rendu muet.`))
        .catch(error => message.reply(`Je suis désolé, je n'ai pas pu rendre muet cet utilisateur. Raison : ${error}`));
    }
  }
});

client.login(MTA3MzM5NjQxMDM0MDM1NjE3Ng.GKWUJ9.xx-qdmUT4rzaU-_ViJ3cFHUDnEgkE2GLpg3QAY);