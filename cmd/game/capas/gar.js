module.exports = async (client, message) => {
  const { MessageEmbed } = require("discord.js");
  const gar = new MessageEmbed()
    .setColor("##FFA500")
    .setTitle(
      `__Capacités Oranges__ de l'équipe des __Gardiens de la Galaxie__`
    )
    .setDescription(
      `<:st:626353634547859456> **Team Optimale**
      Star Lord - Rocket - Drax - Mantis - Groot`
    )
    .setThumbnail(
      "http://marvelheroes.info/img/items/hd/item_spraypaint_gotgvol2_logo.png"
    )
    .setImage(
      `https://cdn.discordapp.com/attachments/684298487021699109/684299567751102753/Orange_Essentials_-_02_-_Guardians_of_the_Galaxy.png`
    );

  message.channel.send(gar);

  exports.help = {
    name: "gar"
  };
};
