module.exports = async (bot, message, PREFIX) => {
  const { MessageEmbed } = require("discord.js");

  var menu = new MessageEmbed()
    .setColor("#214FE8")
    .setThumbnail(
      "http://marvelheroes.info/img/power/icon/hd/power_wintersoldier_ultimate.png"
    )
    .setTitle(`__Liste des commandes__`)
    .setDescription(
      `*Chaque commande est à précéder du préfixe ${PREFIX} en minuscule et sans espace.*`
    )
    .addField(
      `**__Commandes de base__**`,
      `j!**capa** : Priorités capas T4 par équipe
      j!**farm** : Guide de farming (débutant)
      j!**g13** : Liste des matériaux uniques G13 par perso
      j!**g14** : Liste des semi-uniques G14 par perso
      j!**leg** : Persos nécessaires aux évènements uniques
      j!**lvl** : Ressources nécessaires au leveling
      j!**team** : Top 5 des équipes d'arène et raid
      j!**tierlist** : Tier-list des personnages`,
      true
    )
    .addField(
      `**__Commandes diverses__**`,
      `j!**cpf** : Gif "C'est pas faux"
      j!**inter** : Gif "Interprète"
      j!**title** : Image "Titre de ta sex tape"
      j!**8ball** : Suivi d'une question
      j!**dice** : Suivi d'un nombre de lancers et du nombre de faces du dé`,
      true
    )
    .setFooter(message.author.username, message.author.displayAvatarURL());
  message.channel.send(menu).catch(console.error);
};

exports.info = {
  name: "menu",
};
