module.exports = async (client, message) => {
  const { MessageEmbed } = require("discord.js");
  const xmen = new MessageEmbed()
    .setColor("##FFA500")
    .setTitle(`__Capacités Oranges__ de l'équipe des __X-Men__`)
    .setDescription(
      `<:st:626353634547859456> **Team Optimale**
      __Résiliente :__ Phénix - Colossus - Wolverine - Psylocke - Tornade
      __Mixte :__ Phénix - Colossus - Cyclope - Psylocke - Tornade
      __Agressive :__ Phénix - Colossus - Wolverine - Cyclope - Tornade
      __Hyperagressive :__ Phénix - Psylocke - Wolverine - Cyclope - Tornade`
    )
    .setThumbnail(
      "http://marvelheroes.info/img/items/hd/armor_wolverine_mask.png"
    )
    .setImage(
      `https://cdn.discordapp.com/attachments/684298487021699109/684301752530370595/X-Men_v2.png`
    );

  message.channel.send(xmen);

  exports.help = {
    name: "xmen"
  };
};
