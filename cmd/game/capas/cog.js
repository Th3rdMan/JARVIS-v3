module.exports = async (client, message) => {
  const { MessageEmbed } = require("discord.js");
  const cog = new MessageEmbed()
    .setColor("##FFA500")
    .setTitle(`__Capacités Oranges__ de l'équipe des __Cogneurs__`)
    .setDescription(
      `<:st:626353634547859456> **Team Optimale**
      *En fonction des rosters et des persos disponibles*`
    )
    .setThumbnail(
      "http://marvelheroes.info/img/items/hd/armor_captainmarvel_gloves.png"
    )
    .setImage(
      `https://cdn.discordapp.com/attachments/684298487021699109/684301409742749726/Orange_Essentials_-_Hero_Brawlers.png`
    );

  message.channel.send(cog);

  exports.help = {
    name: "cog"
  };
};
