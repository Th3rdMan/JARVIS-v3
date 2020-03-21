module.exports = async (client, message) => {
  const { MessageEmbed } = require("discord.js");
  const inh = new MessageEmbed()
    .setColor("##FFA500")
    .setTitle(`__Capacités Oranges__ de l'équipe des __Inhumains__`)
    .setDescription(
      `<:st:626353634547859456> **Team Optimale**
      Karnak - Yoyo - Black Bolt - Quake - Crystal`
    )
    .setThumbnail(
      "http://marvelheroes.info/img/items/hd/armor_blackbolt_mask.png"
    )
    .setImage(
      `https://cdn.discordapp.com/attachments/684298487021699109/684301788882534400/Orange_Essentials_-_Inhumans.png`
    );

  message.channel.send(inh);

  exports.help = {
    name: "inh"
  };
};
