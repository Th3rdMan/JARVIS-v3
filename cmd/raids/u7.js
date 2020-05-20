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

  if (objectif != 30 && objectif != 60 && objectif != 100) {
    message.author
      .send(`⚠️ Pour lancer le raid U7, merci de préciser un objectif :\n
    --> **${bot.PREFIX}u7 30/60/100**\n`);
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

  const u7 = new MessageEmbed()
    .setColor("#FAAB23")
    .setTitle("Nouveau raid lancé")
    .setAuthor(
      "Raid Ultimus VII",
      "https://www.bluemoongame.com/wp-content/uploads/2019/09/Ultimus-ultimat.png"
    )
    .setDescription(`__Objectif du jour : **${objectif}**__ !`)
    .setThumbnail(img)
    .addField(
      "**Bonne chance combattants, on compte sur vous !**",
      `Placez-vous sur vos lignes respectives dès que possible et faites vos premiers combats rapidement afin de pouvoir gérer au mieux vos énergies en fin de raid. 
L'objectif reste que chacun arrive au moins jusqu'au second mini-boss. On communique, on s'organise en groupe et tout devrait bien se passer !\n\n**Fin du raid prévu pour ${finu7}h !**`
    )
    .setTimestamp()
    .setFooter(message.author.username, message.author.displayAvatarURL());

  const salu7 = bot.channels.cache.get("599449958327910403");
  salu7.send(u7).catch(console.error);

  console.log(
    `Raid U7 lancé par ${message.author.username}, objectif : ${objectif}`
  );
};

exports.help = {
  name: "u7",
};
