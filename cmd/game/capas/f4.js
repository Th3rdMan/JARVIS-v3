module.exports = async (client, message) => {
  const { MessageEmbed } = require("discord.js");
  const f4 = new MessageEmbed()
    .setColor("##FFA500")
    .setTitle(`__Capacités Oranges__ de l'équipe des __4 Fantastiques__`)
    .setDescription(
      `<:st:626353634547859456> **Team Optimale**
      M. Fantastic - La Torche - Femme Invisible - Namor - La Chose`
    )
    .setThumbnail("http://marvelheroes.info/img/items/hd/item_art137.png")
    .setImage(
      `https://cdn.discordapp.com/attachments/684298487021699109/684301569843396648/Fantastic_4.png`
    );

  message.channel.send(f4);

  exports.help = {
    name: "f4"
  };
};
