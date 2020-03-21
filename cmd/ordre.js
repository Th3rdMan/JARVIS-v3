module.exports = async (bot, message, args) => {
  let [salle, cible] = args;
  require("console-stamp")(console, "[HH:MM:ss]");
  const Discord = require("discord.js");

  if (!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES"))
    return message.channel.send(
      `Désolé ${message.author.username} mais vous n'avez pas la permission d'utiliser cette commande !`
    );
  // Images de base
  let img =
    "http://marvelheroes.info/img/power/icon/hd/power_warmachine_alphastrike.png";
  let bigimg =
    "https://www.iamag.co/wp-content/uploads/2014/04/Captain-America-The-Winter-Soldier-part-1-3-1200x520.jpg";

  // Contrôle d'erreur
  if (cible === undefined) {
    message.author
      .send(`⚠️ Pour un ordre de guerre, la commande est la suivante :\n
    --> **${bot.PREFIX}ordre SALLE CIBLE**\n
Pour les ponts d'envol, utilise *pe1/pe2/pe3* comme SALLE.
Pour raser une salle, utilise *raser* comme CIBLE.
N'utilisez qu'un seul mot ! N'hésitez à supprimer les espaces du pseudo d'une cible.`);
    console.log(`Erreur d'ordre de guerre par ${message.author.username}`);
    return;
  }

  // Choix des salles
  salle = salle.substring(0, 3).toLowerCase();
  if (salle === "pe1") {
    salle = "Pont d'Envol 1";
    img = "https://zupimages.net/up/20/04/so0k.png";
    bigimg = "https://zupimages.net/up/20/12/t6t9.png";
  }
  if (salle === "pe2") {
    salle = "Pont d'Envol 2";
    img = "https://zupimages.net/up/20/04/so0k.png";
    bigimg = "https://zupimages.net/up/20/12/3u7o.png";
  }
  if (salle === "pe3") {
    salle = "Pont d'Envol 3";
    img = "https://zupimages.net/up/20/04/so0k.png";
    bigimg = "https://zupimages.net/up/20/12/x52z.png";
  }
  if (salle === "inf") {
    salle = "Infirmerie";
    img = "https://zupimages.net/up/20/04/h88w.png";
    bigimg = "https://zupimages.net/up/20/12/j0o1.png";
  }
  if (salle === "arm") {
    salle = "Armurerie";
    img = "https://zupimages.net/up/20/04/29el.png";
    bigimg = "https://zupimages.net/up/20/12/1t7z.png";
  }
  if (salle === "sou") {
    salle = "Soute";
    img = "https://zupimages.net/up/20/04/2ziy.png";
    bigimg = "https://zupimages.net/up/20/12/lqnz.png";
  }
  if (salle === "han") {
    salle = "Hangar";
    img = "https://zupimages.net/up/20/04/9u2f.png";
    bigimg = "https://zupimages.net/up/20/12/22re.png";
  }
  if (salle === "pon") {
    salle = "Pont";
    img = "https://zupimages.net/up/20/04/e9p6.png";
    bigimg = "https://zupimages.net/up/20/12/e9em.png";
  }
  if (salle === "rea") {
    salle = "Réacteur";
    img = "https://zupimages.net/up/20/04/zn8m.png";
    bigimg = "https://zupimages.net/up/20/12/rhdb.png";
  }
  if (salle === "réa") {
    salle = "Réacteur";
    img = "https://zupimages.net/up/20/04/zn8m.png";
    bigimg = "https://zupimages.net/up/20/12/rhdb.png";
  }
  if (salle === "sec") {
    salle = "Sécurité";
    img = "https://zupimages.net/up/20/04/57v7.png";
    bigimg = "https://zupimages.net/up/20/12/m6p5.png";
  }
  if (salle === "séc") {
    salle = "Sécurité";
    img = "https://zupimages.net/up/20/04/57v7.png";
    bigimg = "https://zupimages.net/up/20/12/m6p5.png";
  }
  if (salle === "cas") {
    salle = "Caserne";
    img = "https://zupimages.net/up/20/04/6x3v.png";
    bigimg = "https://zupimages.net/up/20/12/s34z.png";
  }
  if (salle === "lab") {
    salle = "Labo Technique";
    img = "https://zupimages.net/up/20/04/vfya.png";
    bigimg = "https://zupimages.net/up/20/12/9l57.png";
  }
  // Raser
  if (cible.toLowerCase() === "raser") {
    cible = "**Raser** intégralement";
  }

  const ordre = new Discord.MessageEmbed()
    .setColor("#ECC120")
    .setTitle("__Cible Prioritaire__")
    .setAuthor(message.author.username, message.author.displayAvatarURL())
    .setThumbnail(img)
    .addField("__Salle__", salle, true)
    .addField("__Cible__", cible, true)
    .setImage(bigimg);
    
  const guerre = bot.channels.cache.get("602292589298974760");
  const briefing = bot.channels.cache.get("494818944490930176");
  guerre.send(ordre).catch(console.error);
  briefing.send(ordre).catch(console.error);
  console.log(
    `Ordre de guerre donné par ${message.author.username} : ${salle} - ${cible}`
  );

  exports.help = {
    name: "ordre"
  };
};
