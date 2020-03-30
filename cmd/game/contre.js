module.exports = async (bot, message) => {
  const { MessageEmbed } = require("discord.js");
  const contre = new MessageEmbed()
    .setColor("#ECC120")
    .setTitle(`__Meilleurs contres__ demandés par ${message.author.username}`)
    .setDescription(
      `Voici les équipes les plus adaptées à faire face aux équipes de défense de guerre les plus courantes.
Tenez cependant compte des potentiels bonus de salles.`
    )
    .setThumbnail(
      "http://marvelheroes.info/img/power/icon/hd/power_taskmaster_offensetrait.png"
    )
    .setImage(
      `https://cdn.discordapp.com/attachments/583911389593075713/677971569884266509/image0.png`
    );

  message.channel.send(contre);

  exports.help = {
    name: "contre"
  };
};
