module.exports = async (bot, message) => {
  const { MessageEmbed } = require("discord.js");
  require("console-stamp")(console, "[HH:MM:ss]");

  if (!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES"))
    return message.channel.send(
      `Désolé ${message.author.username} mais vous n'avez pas la permission d'utiliser cette commande !`
    );

  const don = new MessageEmbed()
    .setColor("#ECC120")
    .setTitle("__Appel aux dons__")
    .setDescription(
      `N'oubliez pas que pour que l'on atteigne tous la 3ème phase de récompense, chacun doit donner au moins **10K <:gold:589148873058942996>**.\nPour l'avancée de l'alliance, et pour votre propre roster : __Merci de faire votre **don quotidien**__ !
`
    )
    .setThumbnail(
      "https://cdn.discordapp.com/attachments/561270477952385037/670636505869582352/4a00009.png"
    )
    .setImage(
      "https://cdn.discordapp.com/attachments/561270477952385037/670722598778437663/1u20011.png"
    );

  const salbri = bot.channels.cache.get("494818944490930176");
  salbri.send(don).catch(console.error);

  console.log(`Rappel de don par ${message.author.username}`);

  exports.help = {
    name: "don"
  };
};
