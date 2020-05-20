module.exports = async (bot, message) => {
  const { MessageEmbed } = require("discord.js");
  const team = new MessageEmbed()
    .setColor("#ECC120")
    .setTitle(`__Top Teams__ demandé par ${message.author.username}`)
    .setDescription(
      "Voici les 5 meilleures équipes pour l'Arène *(Attaque et Defense)* et les Raids."
    )
    .setThumbnail(
      "http://marvelheroes.info/img/power/icon/hd/power_drdoom_doombots.png"
    )
    .setImage(
      "https://cdn.discordapp.com/attachments/583910253138149376/706488957835411466/image0.png"
    )
    .setFooter(
      `Mise à jour du 03/05/2020`,
      `https://static-cdn.jtvnw.net/jtv_user_pictures/7b3e4ffd-ce6a-4630-b255-711c7e001dd0-profile_image-70x70.png`
    );

  message.channel.send(team);

  exports.help = {
    name: "teams",
  };
};
