module.exports = async (client, message) => {
  const { MessageEmbed } = require("discord.js");
  const moment = require("moment");
  moment.locale();
  require("console-stamp")(console, "[HH:MM:ss]");

  if (!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES"))
    return message.channel.send(
      `Désolé ${message.author.username} mais vous n'avez pas la permission de lancer un raid !`
    );

  const finb = moment()
    .add(25, "h")
    .format(`dddd à H`);

  const beta = new MessageEmbed()
    .setColor("#eef416")
    .setTitle("Nouveau raid lancé")
    .setAuthor("Raid Beta", "https://zupimages.net/up/20/06/jc4s.png")
    .setDescription(
      "__Un score final inférieur à **60%**__ sera considéré comme un **échec** !"
    )
    .setThumbnail("https://www.zupimages.net/up/20/06/q9f3.png")
    .addField(
      "**Bonne chance combattants !**",
      `Placez-vous donc sur les lignes les plus adaptées à vos teams dès que possible et faites vos premiers combats rapidement afin de pouvoir gérer au mieux vos énergies en fin de raid.\n\n**Fin du raid prévu pour ${finb}h !**`
    )
    .addField(
      "__Groupe 1__",
      message.guild.roles.get("575291709777379328").members.map(m => m.user),
      true
    )
    .addField(
      "__Groupe 2__",
      message.guild.roles.get("575291719504101386").members.map(m => m.user),
      true
    )
    .addField(
      "__Groupe 3__",
      message.guild.roles.get("575291721886466057").members.map(m => m.user),
      true
    )
    .setTimestamp()
    .setFooter(message.author.username, message.author.displayAvatarURL());
  message.guild.channels
    .get("558758849780252682")
    .send(beta)
    .catch(console.error);
  console.log(`Raid Beta lancé par ${message.author.username}`);
};

exports.help = {
  name: "alpha"
};
