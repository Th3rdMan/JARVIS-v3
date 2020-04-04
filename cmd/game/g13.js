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
      `https://cdn.discordapp.com/attachments/509477853021077514/694737479630061570/uniques310.png`
    )
    .setFooter(
      `Mise à jour du 01/04/2020`,
      `https://www.zupimages.net/up/20/06/zdcp.png`
    );

  message.channel.send(g13);

  exports.help = {
    name: "g13"
  };
};
