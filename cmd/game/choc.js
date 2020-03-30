module.exports = async (bot, message) => {
  const { MessageEmbed } = require("discord.js");
  const choc = new MessageEmbed()
    .setColor("#ECC120")
    .setTitle(`__Equipes de Choc__ demandées par ${message.author.username}`)
    .setDescription(
      `Voici les différentes teams possibles pour optimiser vos rotations en Choc.\n
      Attention de respecter le placement de gauche à droite. Ces équipes sont optimales si chaque personnage est au moins niv.60, capacités 6/6/6/4.`
    )
    .setThumbnail(
      "http://marvelheroes.info/img/power/icon/hd/power_deadpool_giantmallet.png"
    )
    .setImage(
      `https://cdn.discordapp.com/attachments/509477853021077514/674462958658650112/Unique_S2W_Blitz_Teams_3_8_2.png`
    )
    .setFooter(
      `Mise à jour du 05/02/2020`,
      `https://static-cdn.jtvnw.net/jtv_user_pictures/7b3e4ffd-ce6a-4630-b255-711c7e001dd0-profile_image-70x70.png`
    );

  message.channel.send(choc);

  exports.help = {
    name: "choc"
  };
};
