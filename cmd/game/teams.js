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
      "https://cdn.discordapp.com/attachments/509477853021077514/675182715838005258/Team_Tier_List_3_8_2_Graphic.png"
    )
    .setFooter(
      `Mise à jour du 07/02/2020`,
      `https://static-cdn.jtvnw.net/jtv_user_pictures/7b3e4ffd-ce6a-4630-b255-711c7e001dd0-profile_image-70x70.png`
    );

  message.channel.send(team);

  exports.help = {
    name: "teams"
  };
};
