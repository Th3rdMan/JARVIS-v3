const Discord = require("discord.js");
const cron = require("node-cron");
const express = require("express");
const fs = require("fs");
const app = express();
const { TOKEN, PREFIX } = require("./config.js");
const bot = new Discord.Client();
bot.PREFIX = PREFIX;
bot.commands = new Discord.Collection();

bot.on("message", (message) => require("./events/message.js")(bot, message));

bot.on("ready", () => require("./events/guerre.js")(bot, fs, cron, app));
bot.commands.set("ordre", require("./cmd/ordre.js"));
bot.commands.set("freerun", require("./cmd/freerun.js"));

bot.commands.set("menu", require("./cmd/menu.js"));

bot.commands.set("u6", require("./cmd/raids/u6.js"));
bot.commands.set("u7", require("./cmd/raids/u7.js"));
bot.commands.set("alpha", require("./cmd/raids/alpha.js"));
bot.commands.set("beta", require("./cmd/raids/beta.js"));
bot.commands.set("gamma", require("./cmd/raids/gamma.js"));

bot.commands.set("capas", require("./cmd/game/capas.js"));
bot.commands.set("capa", require("./cmd/game/capas.js"));
bot.commands.set("tierlist", require("./cmd/game/tierlist.js"));
bot.commands.set("tl", require("./cmd/game/tierlist.js"));
bot.commands.set("teams", require("./cmd/game/teams.js"));
bot.commands.set("team", require("./cmd/game/teams.js"));
bot.commands.set("choc", require("./cmd/game/choc.js"));
bot.commands.set("g13", require("./cmd/game/g13.js"));
bot.commands.set("t13", require("./cmd/game/g13.js"));
bot.commands.set("g14", require("./cmd/game/g14.js"));
bot.commands.set("t14", require("./cmd/game/g14.js"));
bot.commands.set("farm", require("./cmd/game/farm.js"));
bot.commands.set("farming", require("./cmd/game/farm.js"));
bot.commands.set("contre", require("./cmd/game/contre.js"));
bot.commands.set("contres", require("./cmd/game/contre.js"));
bot.commands.set("counter", require("./cmd/game/contre.js"));
bot.commands.set("leg", require("./cmd/game/legend.js"));
bot.commands.set("lvl", require("./cmd/game/leveling.js"));
bot.commands.set("level", require("./cmd/game/leveling.js"));
bot.commands.set("leveling", require("./cmd/game/leveling.js"));

// Capacités oranges
bot.commands.set("aim", require("./cmd/game/capas/aim.js"));
bot.commands.set("asg", require("./cmd/game/capas/asg.js"));
bot.commands.set("cog", require("./cmd/game/capas/cog.js"));
bot.commands.set("bh", require("./cmd/game/capas/bh.js"));
bot.commands.set("bkt", require("./cmd/game/capas/bkt.js"));
bot.commands.set("def", require("./cmd/game/capas/def.js"));
bot.commands.set("f4", require("./cmd/game/capas/f4.js"));
bot.commands.set("gar", require("./cmd/game/capas/gar.js"));
bot.commands.set("hyd", require("./cmd/game/capas/hyd.js"));
bot.commands.set("inh", require("./cmd/game/capas/inh.js"));
bot.commands.set("mar", require("./cmd/game/capas/mar.js"));
bot.commands.set("shd", require("./cmd/game/capas/shd.js"));
bot.commands.set("sur", require("./cmd/game/capas/sur.js"));
bot.commands.set("sym", require("./cmd/game/capas/sym.js"));
bot.commands.set("s6", require("./cmd/game/capas/s6.js"));
bot.commands.set("tec", require("./cmd/game/capas/tec.js"));
bot.commands.set("wak", require("./cmd/game/capas/wak.js"));
bot.commands.set("xme", require("./cmd/game/capas/xme.js"));

bot.commands.set("inter", require("./cmd/inter.js"));
bot.commands.set("cpf", require("./cmd/cpf.js"));
bot.commands.set("don", require("./cmd/don.js"));
bot.commands.set("8ball", require("./cmd/8ball.js"));
bot.commands.set("dice", require("./cmd/dice.js"));
bot.commands.set("titre", require("./cmd/title.js"));
bot.commands.set("title", require("./cmd/title.js"));

//bot.commands.set("first", require("./cmd/first.js"));

bot.login(TOKEN);
bot.on("error", console.error);
bot.on("warn", console.warn);
process.on("unhandledRejection", (error) => {
  console.log("ERREUR : ", error);
});

bot.on("ready", () => {
  bot.user.setPresence({ activity: { name: "se développer" }, status: "idle" });
  console.log(`
-----██╗-█████╗-██████╗-██╗---██╗██╗███████╗----██████╗-----██████╗
-----██║██╔══██╗██╔══██╗██║---██║██║██╔════╝----╚════██╗---██╔═████╗
-----██║███████║██████╔╝██║---██║██║███████╗-----█████╔╝---██║██╔██║
██---██║██╔══██║██╔══██╗╚██╗-██╔╝██║╚════██║-----╚═══██╗---████╔╝██║
╚█████╔╝██║--██║██║--██║-╚████╔╝-██║███████║----██████╔╝██╗╚██████╔╝
-╚════╝-╚═╝--╚═╝╚═╝--╚═╝--╚═══╝--╚═╝╚══════╝----╚═════╝-╚═╝-╚═════╝
`);
});
