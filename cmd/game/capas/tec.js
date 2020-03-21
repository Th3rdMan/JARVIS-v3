module.exports = async (client, message) => {
  const { MessageEmbed } = require("discord.js");
  const techno = new MessageEmbed()
    .setColor("##FFA500")
    .setTitle(`__Capacités Oranges__ de l'équipe __Techno-Armure__`)
    .setDescription(
      `<:st:626353634547859456> **Team Optimale**\n 
      Falcon - IronMan - Ironheart - WarMachine - Rescue`
    )
    .setThumbnail(
      "http://marvelheroes.info/img/items/hd/armor_ironman_arcreactor.png"
    )
    .setImage(
      `https://cdn.discordapp.com/attachments/684298487021699109/684301670376931338/Power_Armor_v2.png`
    );

  message.channel.send(techno);

  exports.help = {
    name: "techno"
  };
};
