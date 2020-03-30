module.exports = async (bot, message) => {
  const { MessageEmbed } = require("discord.js");
  const legend = new MessageEmbed()
    .setColor("#ECC120")
    .setTitle(
      `Personnages requis pour les __Légendaires__ demandés par ${message.author.username}`
    )
    .setDescription(
      "Voici, pour chaque personnage légendaire, la liste des personnages utilisables lors des évènements."
    )
    .setThumbnail(
      "http://marvelheroes.info/img/power/icon/hd/power_warmachine_defensetrait.png"
    )
    .setImage(
      "https://cdn.discordapp.com/attachments/561270477952385037/661734443500830750/unknown.png"
    );

  message.channel.send(legend);

  exports.help = {
    name: "legend"
  };
};
