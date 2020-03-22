module.exports = async (bot, message, args) => {
  const { MessageEmbed } = require("discord.js");
  let [jet, face] = args;
  if (face === undefined) return;
  if (jet === undefined) return;
  //var roll = (Math.floor(Math.random() * face) + 1) * jet;

  var roll = "";
  for (var i = 0; i < jet; i++) {
    roll += " [ ";
    roll += Math.floor(Math.random() * face) + 1;
    roll += " ]  ";
  }

  var dice = new MessageEmbed()
    .setColor("#82D140")
    .setThumbnail("https://zupimages.net/up/20/09/pcap.png")
    .setTitle(`__Jet de ${jet}d${face}__`)
    .addField(`Résultat :`, `**${roll}**`)
    .setFooter(message.author.username, message.author.displayAvatarURL());
  message.channel.send(dice).catch(console.error);
};

exports.info = {
  name: "dice"
};
