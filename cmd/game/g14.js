module.exports = async (bot, message) => {
  const { MessageEmbed } = require("discord.js");
  const g14 = new MessageEmbed()
    .setColor("#ECC120")
    .setTitle(
      `__Objets Supérieurs nécessaires au G14__ demandés par ${message.author.username}`
    )
    .setDescription(
      `Voici les différentes quantités d'objets oranges nécessaires pour le __palier 14__ de chaque personnage.`
    )
    .setThumbnail(
      "http://marvelheroes.info/img/power/icon/hd/power_beast_gluebomb.png"
    )
    .setImage(
      `https://cdn.discordapp.com/attachments/555468204999311384/684090132248133654/image0.jpg`
    )
    .setFooter(
      `Mise à jour du 02/03/2020`,
      `https://www.zupimages.net/up/20/06/zdcp.png`
    );

  message.channel.send(g14);

  exports.help = {
    name: "g14"
  };
};
