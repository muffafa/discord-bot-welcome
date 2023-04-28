const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("reactor")
    .setDescription("Returns reactions."),
  async execute(interaction, client) {
    const message = await interaction.reply({
      content: "React here!",
      fetchReply: true,
    });

    message.react("👍").then(() => message.react("👎"));

    const collectorFilter = (reaction, user) => {
      return (
        ["👍", "👎"].includes(reaction.emoji.name) &&
        user.id === interaction.user.id
      );
    };

    message
      .awaitReactions({
        filter: collectorFilter,
        max: 1,
        time: 10000,
        errors: ["time"],
      })
      .then((collected) => {
        const reaction = collected.first();

        if (reaction.emoji.name === "👍") {
          message.reply("You reacted with a thumbs up.");
        } else {
          message.reply("You reacted with a thumbs down.");
        }
      })
      .catch((collected) => {
        message.reply(
          "You reacted with neither a thumbs up, nor a thumbs down."
        );
      });
  },
};
