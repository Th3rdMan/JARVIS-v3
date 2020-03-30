module.exports = async (bot, message) => {
  const { MessageEmbed } = require("discord.js");
  const farm = new MessageEmbed()
    .setColor("#ECC120")
    .setTitle(`__Guide de farming__ demandé par ${message.author.username}`)
    .setDescription(
      `Voici les priorités de farming (campagnes, magasins, events...) optimales.`
    )
    .setThumbnail(
      "http://marvelheroes.info/img/power/icon/hd/power_shehulk_surprisewitness.png"
    )
    .setImage(
      `https://cdn.discordapp.com/attachments/555468265632170051/675675107393273906/farm_guide_v5.png`
    )
    .setFooter(
      `Mise à jour du 08/02/2020`,
      `https://zupimages.net/up/20/06/8et9.png`
    );

  message.channel.send(farm);

  exports.help = {
    name: "farm"
  };
};
