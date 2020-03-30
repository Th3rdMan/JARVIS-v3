const responses = [
  "Essaye plus tard",
  "D'après moi oui",
  "Oui absolument",
  "Sans aucun doute",
  "C'est non",
  "Peu probable",
  "N'y compte pas",
  "Impossible",
  "C'est bien parti",
  "Mes calculs semblent confirmer cette hypothèse",
  "Aucune chance",
  "C'est certain",
  "Rien n'est moins sûr",
  "Je préfère ne pas répondre",
  "Tout dépend du contexte",
  "Demande à ta soeur !",
  "Pourquoi pas ?",
  "La réponse se trouve au fond de ton coeur",
  "Tu as vraiment des questions étranges",
  "Tu te doutes bien que non",
  "C'est évident que oui"
];

function randomItem(array) {
  return array[Math.floor(Math.random() * array.length)];
}

module.exports = async (bot, message, args) => {
  let response = randomItem(responses);
  let question = args.join(" ");
  message.channel.send(
    `> ${message.author} vient de me poser une question :\n> *${question}*\n \n :8ball: Ma réponse | **${response}**`
  );
};

exports.info = {
  name: "8ball"
};
