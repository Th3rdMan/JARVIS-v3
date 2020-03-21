module.exports = async (client, message) => {
  const { MessageEmbed } = require("discord.js");
  const leveling = new MessageEmbed()
    .setColor("#ECC120")
    .setTitle(`__Coûts de leveling__ demandés par ${message.author.username}`)
    .setDescription(
      "Voici les différents coûts fixes pour le leveling d'un personnage *(gold, matériels, fragments...)*."
    )
    .setThumbnail(
      "http://marvelheroes.info/img/power/icon/hd/power_nickfury_moleculargrenade.png"
    )
    .setImage(
      "https://cdn.discordapp.com/attachments/561270477952385037/661744718408974336/unknown.png"
    );

  message.channel.send(leveling);

  exports.help = {
    name: "leveling"
  };
};
