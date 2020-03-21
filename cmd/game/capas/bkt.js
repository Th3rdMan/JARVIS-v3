module.exports = async (client, message) => {
  const { MessageEmbed } = require("discord.js");
  const bkt = new MessageEmbed()
    .setColor("##FFA500")
    .setTitle(`__Capacités Oranges__ de l'équipe __Technerva BKT__`)
    .setDescription(
      `<:st:626353634547859456> **Team Raid**
      Rocket - Thanos - Minn Erva - Star Lord - Groot\n
      <:st:626353634547859456> **Team Défense**
      Groot - Minn Erva - Vision - Star Lord - Rocket`
    )
    .setThumbnail(
      "http://marvelheroes.info/img/items/hd/armor_starlord_bodysuit.png"
    )
    .setImage(
      `https://cdn.discordapp.com/attachments/684298487021699109/684299565398360074/Orange_Essentials_-_02_-_Guardiannerva_BKT.png`
    );

  message.channel.send(bkt);

  exports.help = {
    name: "bkt"
  };
};
