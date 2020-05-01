module.exports = async (bot, message) => {
  const { MessageEmbed } = require("discord.js");
  const moment = require("moment");
  moment.locale("fr");
  require("console-stamp")(console, "[HH:MM:ss]");

  if (!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES"))
    return message.channel.send(
      `Désolé ${message.author.username} mais vous n'avez pas la permission de lancer un raid !`
    );

  const finu7 = moment().add(26, "h").format(`dddd à H`);

  const u7 = new MessageEmbed()
    .setColor("#FAAB23")
    .setTitle("Nouveau raid lancé")
    .setAuthor(
      "Raid Ultimus VII",
      "https://www.bluemoongame.com/wp-content/uploads/2019/09/Ultimus-ultimat.png"
    )
    .setDescription(
      "__N'oubliez pas que **tout le monde** a son rôle à jouer pour atteindre le **60%** !__"
    )
    .setThumbnail(
      "http://marvelheroes.info/img/power/icon/hd/power_jeangrey_phoenixtransform.png"
    )
    .addField(
      "**Bonne chance combattants, on compte sur vous !**",
      `Placez-vous sur vos lignes respectives dès que possible et faites vos premiers combats rapidement afin de pouvoir gérer au mieux vos énergies en fin de raid. 
L'objectif reste que chacun arrive jusqu'au moins jusqu'au second mini-boss. On communique, on s'organise en groupe et tout devrait bien se passer !\n\n**Fin du raid prévu pour ${finu7}h !**`
    )
    .setTimestamp()
    .setFooter(message.author.username, message.author.displayAvatarURL());

  const salu7 = bot.channels.cache.get("599449958327910403");
  salu7.send(u7).catch(console.error);

  console.log(`Raid U7 lancé par ${message.author.username}`);
};

exports.help = {
  name: "u7",
};
