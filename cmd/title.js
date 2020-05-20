module.exports = async (Discord, message) => {
  const { MessageEmbed } = require("discord.js");
  const title = new MessageEmbed()
    .setColor("#4C4C4C")
    .setImage("https://zupimages.net/up/20/20/uikt.png")
    .setFooter(message.author.username, message.author.displayAvatarURL());

  message.channel.send(title);
};
