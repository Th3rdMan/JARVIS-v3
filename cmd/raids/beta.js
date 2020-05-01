module.exports = async (bot, message) => {
  const { MessageEmbed } = require("discord.js");
  const moment = require("moment");
  moment.locale("fr");
  require("console-stamp")(console, "[HH:MM:ss]");

  if (!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES"))
    return message.channel.send(
      `Désolé ${message.author.username} mais vous n'avez pas la permission de lancer un raid !`
    );

  const finb = moment().add(26, "h").format(`dddd à H`);

  const beta = new MessageEmbed()
    .setColor("#eef416")
    .setTitle("Nouveau raid lancé")
    .setAuthor("Raid Beta", "https://zupimages.net/up/20/06/jc4s.png")
    .setDescription(
      "__Un score final inférieur à **90%**__ sera considéré comme un **échec** !"
    )
    .setThumbnail("https://www.zupimages.net/up/20/06/q9f3.png")
    .addField(
      "**Bonne chance combattants !**",
      `Placez-vous donc sur les lignes les plus adaptées à vos teams dès que possible et faites vos premiers combats rapidement afin de pouvoir gérer au mieux vos énergies en fin de raid.\n\n**Fin du raid prévu pour ${finb}h !**`
    )
    .setTimestamp()
    .setFooter(message.author.username, message.author.displayAvatarURL());

  const salb = bot.channels.cache.get("558758849780252682");
  salb.send(beta).catch(console.error);

  console.log(`Raid Beta lancé par ${message.author.username}`);
};

exports.help = {
  name: "beta",
};
