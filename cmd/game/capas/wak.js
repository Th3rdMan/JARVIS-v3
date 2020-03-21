module.exports = async (client, message) => {
  const { MessageEmbed } = require("discord.js");
  const wakanda = new MessageEmbed()
    .setColor("##FFA500")
    .setTitle(`__Capacités Oranges__ de l'équipe du __Wakanda__`)
    .setDescription(
      `<:st:626353634547859456> **Team Optimale**\n 
      M'Baku - Killmonger - Black Panther - Okoye - Shuri`
    )
    .setThumbnail(
      "https://cdn.discordapp.com/attachments/684298487021699109/684299680720355328/Orange_Essentials_-_Wakandans.png"
    )
    .setImage(`https://i.imgur.com/9f4gW4u.png`);

  message.channel.send(wakanda);

  exports.help = {
    name: "wakanda"
  };
};
