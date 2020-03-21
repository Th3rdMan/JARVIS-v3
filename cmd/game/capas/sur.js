module.exports = async (client, message) => {
  const { MessageEmbed } = require("discord.js");
  const sur = new MessageEmbed()
    .setColor("##FFA500")
    .setTitle(`__Capacités Oranges__ de l'équipe __Surnaturelle__`)
    .setDescription(
      `<:st:626353634547859456> **Team Optimale**
      Ghost Rider - Mordo - Elsa - Scarlet Witch - Dr Strange`
    )
    .setThumbnail(
      "http://marvelheroes.info/img/items/hd/armor_ghostrider_jacket.png"
    )
    .setImage(
      `https://cdn.discordapp.com/attachments/684298487021699109/684301365626798104/Orange_Essentials_-The_Supernaturals.png`
    );

  message.channel.send(sur);

  exports.help = {
    name: "sur"
  };
};
