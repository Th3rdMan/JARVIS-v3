module.exports = async (client, message) => {
  const { MessageEmbed } = require("discord.js");
  const cpf = new MessageEmbed()
    .setColor("#4C4C4C")
    .setImage(
      `https://media1.tenor.com/images/9e2fd8f6f208f6e34a01038859a10b0b/tenor.gif?itemid=4828372`
    )
    .setFooter(message.author.username, message.author.displayAvatarURL());

  message.channel.send(cpf);
};
