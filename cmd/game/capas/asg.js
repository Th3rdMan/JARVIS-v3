module.exports = async (client, message) => {
  const { MessageEmbed } = require("discord.js");
  const asgard = new MessageEmbed()
    .setColor("##FFA500")
    .setTitle(`__Capacités Oranges__ de l'équipe __Asgardienne__`)
    .setDescription(
      `<:st:626353634547859456> **Team Optimale**
      Sif - Heimdall - Thor - Hela - Loki`
    )
    .setThumbnail(
      "http://marvelheroes.info/img/items/hd/armor_angela_helmet.png"
    )
    .setImage(
      `https://cdn.discordapp.com/attachments/684298487021699109/684301454869266432/Orange_Essentials_-_Asgardians.png`
    );

  message.channel.send(asgard);

  exports.help = {
    name: "asgard"
  };
};
