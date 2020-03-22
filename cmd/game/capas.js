module.exports = async (client, message) => {
  const { MessageEmbed } = require("discord.js");
  let Authorid = message.author.id;
  const capas = new MessageEmbed()
    .setColor("#ECC120")
    .setTitle(`__Capacités Oranges__ demandées par ${message.author.username}`)
    .setDescription(
      `**__Pour quelle team ?__**
      *Pour choisir, saisissez les lettres correspondantes à l'équipe*`
    )
    .addField(
      `⬇️`,
      `**AIM**
      **ASG** - Asgardiens
      **COG** - Cogneurs
      **BH** - Confrérie
      **BKT** - Technerva / BKT
      **DEF** - Defenders
      **F4** - Quatre Fantastiques
      **GAR** - Gardiens de la Galaxie
      **HYD** - Hydra`,
      true
    )
    .addField(
      `⬇️`,
      `**INH** - Inhumains
      **MAR** - Maraudeurs
      **TEC** - Techno Armure
      **S6** - Sinister 6
      **SHD** - SHIELD
      **SUR** - Surnaturelle
      **SYM** - Symbiotes / Spiderman
      **WAK** - Wakanda
      **XME** - Xmen`,
      true
    )
    .setThumbnail("http://marvelheroes.info/img/items/hd/item_art252.png");
  const filter = response => {
    return response.author.id === Authorid;
  };
  message.channel.send(capas).then(function() {
    message.channel
      .awaitMessages(response => message.content, {
        filter,
        max: 1
      })
      .then(collected => {
        var response = collected.first();
        var choix = String.prototype.toLowerCase.apply(response);
        client.commands.get(choix)(client, message);
        message.delete();
      });
  });

  exports.help = {
    name: "capas"
  };
};
