module.exports = async (client, message) => {
  const { MessageEmbed } = require("discord.js");
  const aim = new MessageEmbed()
    .setColor("##FFA500")
    .setTitle(`__Capacités Oranges__ de l'équipe __AIM__`)
    .setDescription(
      `<:st:626353634547859456> **Teams Optimales**\n
      **Raid / Défense GA**
      Scientifique - Assaillant - Monstrosité - Graviton - Surveillante\n
      **Arène / Choc / Attaque GA**
      Scientifique - Assaillant - Chercheuse - Graviton - Surveillante`
    )
    .setThumbnail(
      "https://cdn.discordapp.com/attachments/561270477952385037/670728835540582461/ede0001.png"
    )
    .setImage(
      `https://cdn.discordapp.com/attachments/684298487021699109/684301275604451358/Orange_Essentials_-_08_-_AIM.png`
    );

  message.channel.send(aim);

  exports.help = {
    name: "aim"
  };
};
