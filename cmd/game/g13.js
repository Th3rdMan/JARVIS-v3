module.exports = async (bot, message) => {
  const { MessageEmbed } = require("discord.js");
  const g13 = new MessageEmbed()
    .setColor("#ECC120")
    .setTitle(
      `__Objets Supérieurs Uniques G13__ demandés par ${message.author.username}`
    )
    .setDescription(
      `Voici les différents objets oranges uniques nécessaire pour le __palier 13__ de chaque personnage.`
    )
    .setThumbnail(
      "http://marvelheroes.info/img/power/icon/hd/power_beast_teslatower.png"
    )
    .setImage(
      `https://cdn.discordapp.com/attachments/555468204999311384/708341975279075369/Superuniques40.png`
    )
    .setFooter(
      `Mise à jour du 08/05/2020`,
      `https://www.zupimages.net/up/20/06/zdcp.png`
    );

  message.channel.send(g13);

  exports.help = {
    name: "g13",
  };
};
