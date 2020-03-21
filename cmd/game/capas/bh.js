module.exports = async (client, message) => {
  const { MessageEmbed } = require("discord.js");
  const bh = new MessageEmbed()
    .setColor("##FFA500")
    .setTitle(`__Capacités Oranges__ de l'équipe de la __Confrérie__`)
    .setDescription(
      `<:st:626353634547859456> **Team Optimale**
      Le Fléau - Colosse - Magneto - Crapaud - Pyro`
    )
    .setThumbnail(
      "http://marvelheroes.info/img/items/hd/armor_magneto_helmet.png"
    )
    .setImage(
      `https://cdn.discordapp.com/attachments/684298487021699109/684301730112077843/The_Brotherhood.png`
    );

  message.channel.send(bh);

  exports.help = {
    name: "bh"
  };
};
