module.exports = async (client, message) => {
  const { MessageEmbed } = require("discord.js");
  const hyd = new MessageEmbed()
    .setColor("##FFA500")
    .setTitle(`__Capacités Oranges__ de l'équipe d'__Hydra__`)
    .setDescription(
      `<:st:626353634547859456> **Team Optimale**
      Wait & See`
    )
    .setThumbnail("http://marvelheroes.info/img/items/hd/item_art287.png")
    .setImage(
      `https://cdn.discordapp.com/attachments/684298487021699109/684301641335308318/Hydra.png`
    );

  message.channel.send(hyd);

  exports.help = {
    name: "hyd"
  };
};
