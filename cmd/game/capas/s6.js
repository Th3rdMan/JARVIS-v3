module.exports = async (client, message) => {
  const { MessageEmbed } = require("discord.js");
  const s6 = new MessageEmbed()
    .setColor("##FFA500")
    .setTitle(`__Capacités Oranges__ de l'équipe des __Sinister 6__`)
    .setDescription(
      `<:st:626353634547859456> **Team Optimale**\n 
      Vautour - Mysterio - Rhino - Shocker - Bouffon Vert`
    )
    .setThumbnail("http://marvelheroes.info/img/items/hd/item_art353.png")
    .setImage(
      `https://cdn.discordapp.com/attachments/684298487021699109/684301224992178456/Orange_Essentials_-_06_-_Sinister_Six.png`
    );

  message.channel.send(s6);

  exports.help = {
    name: "s6"
  };
};
