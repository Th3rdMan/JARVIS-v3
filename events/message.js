module.exports = (bot, message) => {
  if (message.author.bot) return;
  if (message.content.toLowerCase().indexOf(bot.PREFIX) !== 0) return;
  const args = message.content
    .slice(bot.PREFIX.length)
    .trim()
    .split(/ +/g);
  const command = args.shift().toLowerCase();

  if (bot.commands.has(command)) bot.commands.get(command)(bot, message, args);
  message.delete().catch(console.error);
};
