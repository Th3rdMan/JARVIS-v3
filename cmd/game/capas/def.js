module.exports = async (client, message) => {
  const { MessageEmbed } = require("discord.js");
  const defenders = new MessageEmbed()
    .setColor("##FFA500")
    .setTitle(`__Capacités Oranges__ de l'équipe __Defenders__`)
    .setDescription(
      `<:st:626353634547859456> **Team Optimale**
      Cage - Daredevil - Jones - IronFist - Punisher`
    )
    .setThumbnail(
      "http://marvelheroes.info/img/items/hd/armor_ironfist_mask.png"
    )
    .setImage(
      `https://cdn.discordapp.com/attachments/684298487021699109/684301335730192388/Orange_Essentials_-The_Defenders.png`
    );

  message.channel.send(defenders);

  exports.help = {
    name: "defenders"
  };
};
