module.exports = (bot, fs, cron, app) => {
  require("console-stamp")(console, "[HH:MM:ss]");
  // Lancement de la guerre à 20h les mardi/jeudi/samedi
  cron.schedule(
    "0 20 * * 2,4",
    () => {
      console.log("Début de GA");
      const { MessageEmbed } = require("discord.js");
      const war = new MessageEmbed()
        .setColor("#B10B0B")
        .setTitle("__Fichier de guerre__")
        .setURL(
          "https://docs.google.com/spreadsheets/d/1JvhS19zgehn5MClDCiOep5wXQHBDxGmSeHJHzF74sRQ/edit?usp=sharing"
        )
        .setAuthor(
          "La Guerre d'Alliance a commencé !",
          "https://vignette.wikia.nocookie.net/marvel-strike-force/images/1/1d/NobuSpecial.png/revision/latest?cb=20180401124047&path-prefix=fr"
        )
        .setDescription(
          "Vous y trouverez les données utiles pour cette guerre."
        )
        .setThumbnail(
          "http://marvelheroes.info/img/power/icon/hd/power_punisher_pineapplegrenade.png"
        )
        .setImage(
          "https://cdn.discordapp.com/attachments/561270477952385037/670624314667696128/ab00006.png"
        );
      const guerre = bot.channels.cache.get("602292589298974760");
      const briefing = bot.channels.cache.get("494818944490930176");
      guerre.send(war).catch(console.error);
      briefing.send(war).catch(console.error);
    },
    {
      scheduled: true,
      timezone: "Europe/Paris"
    }
  );
  // Grivar Day - Samedi Freerun
  cron.schedule(
    "0 20 * * 6",
    () => {
      console.log("Début de Grivar Day");
      const { MessageEmbed } = require("discord.js");
      const gday = new MessageEmbed()
        .setColor("#08371E")
        .setTitle("__Grivar Day__")
        .setAuthor(
          "La Guerre d'Alliance a commencé !",
          "https://cdn.discordapp.com/attachments/561270477952385037/670627201397555210/4qe0009.png"
        )
        .setDescription(
          "Comme tous les samedi, c'est détente ! Pas de directive, pas d'ordre. Vous n'avez que l'obligation de faire vos 8 attaques habituelles. Profitez-en pour vous entraîner ! Faîtes des tests d'équipes, osez prendre un risque ou deux.\n Mais choisissez bien vos cibles, si la victoire est possible **ne lui tournez pas le dos** ! Et profitez de votre week-end !\n C'est __GRIVAR DAY__ !"
        )
        .setThumbnail(
          "https://cdn.discordapp.com/attachments/561270477952385037/670729683855343649/e6b0001.png"
        )
        .setImage(
          "https://cdn.discordapp.com/attachments/561270477952385037/670625245891264531/5jm0008.png"
        );
      const guerre = bot.channels.cache.get("602292589298974760");
      const briefing = bot.channels.cache.get("494818944490930176");
      guerre.send(gday).catch(console.error);
      briefing.send(gday).catch(console.error);
    },
    {
      scheduled: true,
      timezone: "Europe/Paris"
    }
  );
  // Lancement du rush à 19h
  cron.schedule(
    "00 19 * * 3,5,7",
    () => {
      console.log("Rush lancé");
      const { MessageEmbed } = require("discord.js");
      const rush = new MessageEmbed()
        .setColor("#8A1453")
        .setTitle("__Time to Rush__")
        .setAuthor(
          "Il ne reste qu'une heure !",
          "https://cdn.pixabay.com/photo/2014/03/24/17/15/clock-295201_960_720.png"
        )
        .setDescription(
          "Moins de 60 min pour atteindre votre objectif personnel de __8 attaques minimum__ et potentiellement assurer la victoire collective. **On se bouge !**\n ⚠️ *Un rush n'est pas un freerun ! Merci de respecter les directives*"
        )
        .setThumbnail(
          "https://cdn.discordapp.com/attachments/561270477952385037/670723719769096256/3l90012.png"
        )
        .setImage(
          "https://cdn.discordapp.com/attachments/561270477952385037/670625697483718706/5gm0008.png"
        );
      const guerre = bot.channels.cache.get("602292589298974760");
      const briefing = bot.channels.cache.get("494818944490930176");
      guerre.send(rush).catch(console.error);
      briefing.send(rush).catch(console.error);
    },
    {
      scheduled: true,
      timezone: "Europe/Paris"
    }
  );
  app.listen(8000);
};
