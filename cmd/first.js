module.exports = async (bot, message) => {
  const { MessageEmbed } = require("discord.js");
  const moment = require("moment");
  moment.locale(`fr`);

  if (!message.guild.member(message.author).hasPermission("MANAGE_CHANNELS"))
    return message.channel.send(
      `Désolé ${message.author.username} mais vous n'avez pas la permission d'utiliser cette commande !`
    );

  const date = new Date(Date.now());
  const datefirst = moment(date).format("LL");
  // ID du membre
  const membre = message.guild.members.cache.get("145654206785781760");

  var first = new MessageEmbed()
    .setColor("#FFD700")
    .setTitle(
      `<:st:626353634547859456> Nouveau personnage débloqué ! <:st:626353634547859456>`
    )
    // Nom du personnage + accord de genre
    .addField(
      `Le premier **Corvus Galive** de l'alliance`,
      `a été débloqué par ${membre}`
    )
    // Lien image
    .setImage(
      "https://instagram.fbru2-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s750x750/94969521_140477140884094_9211428223919968117_n.jpg?_nc_ht=instagram.fbru2-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=N4pKaHg-y9QAX_3AleO&oh=9c0cf15324c50f50378538142a9a774c&oe=5ED7A8DE"
    )
    .setFooter(
      `1er mai 2020`,
      `http://aux2.iconspalace.com/uploads/number-1-icon-256.png`
    );
  message.channel.send(first).catch(console.error);
};

exports.help = {
  name: "first",
};
