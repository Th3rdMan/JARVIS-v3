module.exports = async (Discord, message) => {
  const { MessageEmbed } = require("discord.js");
  const inter = new MessageEmbed()
    .setColor("#4C4C4C")
    .setImage(
      "https://cdn.discordapp.com/attachments/638456723686031370/681920749485031489/image0.gif"
    )
    .setFooter(message.author.username, message.author.displayAvatarURL());

  message.channel.send(inter);
};
