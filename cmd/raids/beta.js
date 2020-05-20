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

  if (objectif != 30 && objectif != 60 && objectif != 100) {
    message.author
      .send(`⚠️ Pour lancer le raid Beta, merci de préciser un objectif :\n
    --> **${bot.PREFIX}beta 30/60/100**\n`);
    console.log(`Erreur d'ordre de raid alpha par ${message.author.username}`);
    return;
  }

  if (objectif === "100") {
    objectif = "100%";
    img = "https://zupimages.net/up/20/18/2r96.png";
  }
  if (objectif === "60") {
    objectif = "60%";
    img = "https://zupimages.net/up/20/18/9y8s.png";
  }
  if (objectif === "30") {
    objectif = "30%";
    img = "https://zupimages.net/up/20/18/h2yk.png";
  }

  const beta = new MessageEmbed()
    .setColor("#eef416")
    .setTitle("Nouveau raid lancé")
    .setAuthor("Raid Beta", "https://zupimages.net/up/20/06/jc4s.png")
    .setDescription(`__Objectif du jour : **${objectif}**__ !`)
    .setThumbnail(img)
    .addField(
      "**Bonne chance combattants !**",
      `Placez-vous donc sur les lignes les plus adaptées à vos teams dès que possible et faites vos premiers combats rapidement afin de pouvoir gérer au mieux vos énergies en fin de raid.\n\n**Fin du raid prévu pour ${finb}h !**`
    )
    .setTimestamp()
    .setFooter(message.author.username, message.author.displayAvatarURL());

  const salb = bot.channels.cache.get("558758849780252682");
  salb.send(beta).catch(console.error);

  console.log(
    `Raid Beta lancé par ${message.author.username}, objectif : ${objectif}`
  );
};

exports.help = {
  name: "beta",
};
