module.exports = async (bot, message, args) => {
  let [objectif] = args;
  const { MessageEmbed } = require("discord.js");
  const moment = require("moment");
  moment.locale("fr");
  require("console-stamp")(console, "[HH:MM:ss]");

  if (!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES"))
    return message.channel.send(
      `Désolé ${message.author.username} mais vous n'avez pas la permission de lancer un raid !`
    );

  const fina = moment().add(26, "h").format(`dddd à H`);

  if (objectif != 30 && objectif != 60 && objectif != 100) {
    message.author
      .send(`⚠️ Pour lancer le raid Alpha, merci de préciser un objectif :\n
    --> **${bot.PREFIX}alpha 30/60/100**\n`);
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

  const alpha = new MessageEmbed()
    .setColor("#892ca6")
    .setTitle("Nouveau raid lancé")
    .setAuthor("Raid Alpha", "https://zupimages.net/up/20/06/1rll.png")
    .setDescription(`__Objectif du jour : **${objectif}**__ !`)
    .setThumbnail(img)
    .addField(
      "**Bonne chance combattants !**",
      `Placez-vous donc sur les lignes les plus adaptées à vos teams dès que possible et faites vos premiers combats rapidement afin de pouvoir gérer au mieux vos énergies en fin de raid.\n\n**Fin du raid prévu pour ${fina}h !**`
    )
    .setTimestamp()
    .setFooter(message.author.username, message.author.displayAvatarURL());

  const salg = bot.channels.cache.get("574200675886563339");
  salg.send(alpha).catch(console.error);

  console.log(
    `Raid Alpha lancé par ${message.author.username}, objectif : ${objectif}`
  );
};

exports.help = {
  name: "alpha",
};
