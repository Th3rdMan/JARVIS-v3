module.exports = async (bot, message, args) => {
  let title = args.join(" ");
  message.channel.send(
    `> ${message.author} vient de me poser une question :\n> *${question}*\n \n :8ball: Ma réponse | **${response}**`
  );
};

exports.info = {
  name: "title"
};
