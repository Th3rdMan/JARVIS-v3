module.exports = async (bot, message) => {
  const { MessageEmbed } = require("discord.js");
  const moment = require("moment");
  moment.locale("fr");
  require("console-stamp")(console, "[HH:MM:ss]");

  if (!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES"))
    return message.channel.send(
      `Désolé ${message.author.username} mais vous n'avez pas la permission de lancer un raid !`
    );

  const fina = moment()
    .add(25, "h")
    .format(`dddd à H`);

  const alpha = new MessageEmbed()
    .setColor("#892ca6")
    .setTitle("Nouveau raid lancé")
    .setAuthor("Raid Alpha", "https://zupimages.net/up/20/06/1rll.png")
    .setDescription(
      "__Un score final inférieur à **60%**__ sera considéré comme un **échec** !"
    )
    .setThumbnail("https://www.zupimages.net/up/20/06/fkww.png")
    .addField(
      "**Bonne chance combattants !**",
      `Placez-vous donc sur les lignes les plus adaptées à vos teams dès que possible et faites vos premiers combats rapidement afin de pouvoir gérer au mieux vos énergies en fin de raid. \n\n**Fin du raid prévu pour ${fina}h !**`
    )
    .setTimestamp()
    .setFooter(message.author.username, message.author.displayAvatarURL());

  const salg = bot.channels.cache.get("574200675886563339");
  salg.send(alpha).catch(console.error);

  console.log(`Raid Alpha lancé par ${message.author.username}`);
};

exports.help = {
  name: "alpha"
};
