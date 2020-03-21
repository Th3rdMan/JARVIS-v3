module.exports = async (client, message) => {
  const { MessageEmbed } = require("discord.js");
  const shield = new MessageEmbed()
    .setColor("##FFA500")
    .setTitle(`__Capacités Oranges__ de l'équipe du __SHIELD__`)
    .setDescription(
      `<:st:626353634547859456> **Team Optimale**\n 
      **Défense GA**
      Infirmière - Soldat - Fury - Coulson - Surveillant`
    )
    .setThumbnail("http://marvelheroes.info/img/items/hd/item_art140.png")
    .setImage(
      `https://cdn.discordapp.com/attachments/684298487021699109/684301073825267944/Orange_Essentials_-_05_-_Nick_Fury__SHIELD.png`
    );

  message.channel.send(shield);

  exports.help = {
    name: "shield"
  };
};
