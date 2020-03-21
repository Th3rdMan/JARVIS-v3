module.exports = async (client, message) => {
  const { MessageEmbed } = require("discord.js");
  const maraudeurs = new MessageEmbed()
    .setColor("##FFA500")
    .setTitle(`__Capacités Oranges__ de l'équipe des __Maraudeurs__`)
    .setDescription(
      `<:st:626353634547859456> **Team Optimale**\n 
      Stryfe - Dents de Sabre - Mystique - Caïd - Sinister`
    )
    .setThumbnail("http://marvelheroes.info/img/items/hd/item_art358.png")
    .setImage(
      `https://cdn.discordapp.com/attachments/684298487021699109/684301494161244168/Orange_Essentials_-_Marauders.png`
    );

  message.channel.send(maraudeurs);

  exports.help = {
    name: "maraudeurs"
  };
};
