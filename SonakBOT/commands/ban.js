const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
const token = config.token;

client.on("message", message => {
  if (message.content.startsWith("$ban")) {
    if (message.member.hasPermission("BAN_MEMBERS")) {
      const member = message.mentions.members.first();
      if (!member) {
        return message.reply("Veuillez mentionner un membre valide de ce serveur");
      }
      const reason = message.content.slice(5 + member.toString().length);
      if (!reason) {
        return message.reply("Veuillez indiquer une raison pour le bannissement");
      }
      member.ban({ reason: reason })
        .then(() => {
          message.reply(`${member.user.tag} a été banni avec succès.`);
        })
        .catch(error => {
          console.error(`Une erreur est survenue lors du bannissement de ${member.user.tag} :`, error);
          message.reply("Une erreur est survenue lors du bannissement de ce membre");
        });
    } else {
      message.reply("Vous n'avez pas la permission d'utiliser cette commande.");
    }
  }
});

client.login(token);
