module.exports = async (bot, message) => {
  const { MessageEmbed } = require("discord.js");
  const tierlist = new MessageEmbed()
    .setColor("#ECC120")
    .setTitle(`__Tier List__ demandée par ${message.author.username}`)
    .setDescription(
      "Voici le classement des effectifs actuellement disponibles."
    )
    .setThumbnail(
      "http://marvelheroes.info/img/power/icon/hd/power_ultron_slam.png"
    )
    .setImage(
      "https://cdn.discordapp.com/attachments/509477853021077514/673821657160220672/3_8_2_Tier_List.png"
    )
    .setFooter(
      `Mise à jour du 03/02/2020`,
      `https://static-cdn.jtvnw.net/jtv_user_pictures/7b3e4ffd-ce6a-4630-b255-711c7e001dd0-profile_image-70x70.png`
    );

  message.channel.send(tierlist);

  exports.help = {
    name: "tierlist"
  };
};
