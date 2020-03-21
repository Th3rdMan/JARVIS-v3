module.exports = async (client, message) => {
  const { MessageEmbed } = require("discord.js");
  const sym = new MessageEmbed()
    .setColor("##FFA500")
    .setTitle(`__Capacités Oranges__ de l'équipe des __Spider-Symbiotes__`)
    .setDescription(
      `<:st:626353634547859456> **Team Optimale**
      Venom - Miles - Symbiote - Spiderman - Carnage`
    )
    .setThumbnail("http://marvelheroes.info/img/items/hd/armor_venom_maw.png")
    .setImage(
      `https://cdn.discordapp.com/attachments/684298487021699109/684301696288948255/Symbiote_Spider-Verse_v2.png`
    );

  message.channel.send(sym);

  exports.help = {
    name: "sym"
  };
};
