module.exports = async (bot, message) => {
  const { MessageEmbed } = require("discord.js");
  const moment = require("moment");
  moment.locale("fr");
  require("console-stamp")(console, "[HH:MM:ss]");

  if (!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES"))
    return message.channel.send(
      `Désolé ${message.author.username} mais vous n'avez pas la permission de lancer un raid !`
    );

  const finu6 = moment().add(26, "h").format(`dddd à H`);

  const u6 = new MessageEmbed()
    .setColor("#FAAB23")
    .setTitle("Nouveau raid lancé")
    .setAuthor(
      "Raid Ultimus VI",
      "https://www.bluemoongame.com/wp-content/uploads/2019/09/Ultimus-ultimat.png"
    )
    .setDescription(
      "__N'oubliez pas que **tout le monde** a son rôle à jouer pour atteindre le **100%** !__"
    )
    .setThumbnail(
      "http://marvelheroes.info/img/power/icon/hd/power_jeangrey_debrismaelstrom.png"
    )
    .addField(
      "**Bonne chance combattants, on compte sur vous !**",
      `Placez-vous sur vos lignes respectives dès que possible et faites vos premiers combats rapidement afin de pouvoir gérer au mieux vos énergies en fin de raid. \n\n**Fin du raid prévu à partir de ${finu6}h !**`
    )
    .setTimestamp()
    .setFooter(message.author.username, message.author.displayAvatarURL());

  const salu6 = bot.channels.cache.get("559496214828154911");
  salu6.send(u6).catch(console.error);

  console.log(`Raid U6 lancé par ${message.author.username}`);
};

exports.help = {
  name: "u6",
};
