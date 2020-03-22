module.exports = async (bot, message) => {
  const { MessageEmbed } = require("discord.js");
  if (!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES"))
    return message.channel.send(
      `Désolé ${message.author.username} mais vous n'avez pas la permission d'utiliser cette commande !`
    );

  console.log("Freerun lancé");
  const freerun = new MessageEmbed()
    .setColor("#8B0000")
    .setTitle("__Freerun__")
    .setAuthor(
      "Le freerun est lancé !",
      "https://cdn.discordapp.com/attachments/561270477952385037/670628872374583296/550011.png"
    )
    .setDescription(
      `Il n'y a plus de directives qui comptent ! Détruisez tout ce qui est à votre portée, faites du sale ! Vous avez **carte blanche**.`
    )
    .setThumbnail(
      "https://cdn.discordapp.com/attachments/561270477952385037/670628361269411850/5g00008.png"
    )
    .setImage(
      "https://cdn.discordapp.com/attachments/561270477952385037/670629755971960887/3lj0011.png"
    )
    .setFooter(message.author.username, message.author.displayAvatarURL());

  const guerre = bot.channels.cache.get("602292589298974760");
  const briefing = bot.channels.cache.get("494818944490930176");
  guerre.send(freerun).catch(console.error);
  briefing.send(freerun).catch(console.error);
  console.log(`Freerun lancé par ${message.author.username}`);

  exports.help = {
    name: "freerun"
  };
};
