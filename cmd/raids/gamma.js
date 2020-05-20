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

  const fing = moment().add(26, "h").format(`dddd à H`);

  if (objectif != 30 && objectif != 60 && objectif != 100) {
    message.author
      .send(`⚠️ Pour lancer le raid Gamma, merci de préciser un objectif :\n
    --> **${bot.PREFIX}gamma 30/60/100**\n`);
    console.log(`Erreur d'ordre de raid gamma par ${message.author.username}`);
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

  const gamma = new MessageEmbed()
    .setColor("#cd0f0a")
    .setTitle("Nouveau raid lancé")
    .setAuthor("Raid Gamma", "https://zupimages.net/up/20/06/o3u8.png")
    .setDescription(`__Objectif du jour : **${objectif}**__ !`)
    .setThumbnail(img)
    .addField(
      "**Bonne chance combattants !**",
      `Placez-vous donc sur les lignes les plus adaptées à vos teams dès que possible et faites vos premiers combats rapidement afin de pouvoir gérer au mieux vos énergies en fin de raid.\n\n**Fin du raid prévu pour ${fing}h !**`
    )
    .setTimestamp()
    .setFooter(message.author.username, message.author.displayAvatarURL());

  const salg = bot.channels.cache.get("564010050113241088");
  salg.send(gamma).catch(console.error);

  console.log(
    `Raid Gamma lancé par ${message.author.username}, objectif : ${objectif}`
  );
};

exports.help = {
  name: "gamma",
};
