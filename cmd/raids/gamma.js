module.exports = async (bot, message) => {
  const { MessageEmbed } = require("discord.js");
  const moment = require("moment");
  moment.locale("fr");
  require("console-stamp")(console, "[HH:MM:ss]");

  if (!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES"))
    return message.channel.send(
      `Désolé ${message.author.username} mais vous n'avez pas la permission de lancer un raid !`
    );

  const fing = moment()
    .add(25, "h")
    .format(`dddd à H`);

  const gamma = new MessageEmbed()
    .setColor("#cd0f0a")
    .setTitle("Nouveau raid lancé")
    .setAuthor("Raid Gamma", "https://zupimages.net/up/20/06/o3u8.png")
    .setDescription(
      "__Un score final inférieur à **60%**__ sera considéré comme un **échec** !"
    )
    .setThumbnail("https://www.zupimages.net/up/20/06/tpjg.png")
    .addField(
      "**Bonne chance combattants !**",
      `Placez-vous donc sur les lignes les plus adaptées à vos teams dès que possible et faites vos premiers combats rapidement afin de pouvoir gérer au mieux vos énergies en fin de raid.\n\n**Fin du raid prévu pour ${fing}h !**`
    )
    .setTimestamp()
    .setFooter(message.author.username, message.author.displayAvatarURL());

  const salg = bot.channels.cache.get("564010050113241088");
  salg.send(gamma).catch(console.error);

  console.log(`Raid Gamma lancé par ${message.author.username}`);
};

exports.help = {
  name: "gamma"
};
