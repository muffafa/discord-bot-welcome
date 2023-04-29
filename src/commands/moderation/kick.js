const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("kick")
    .setDescription("Kicks the member provided.")
    .addUserOption((option) =>
      option
        .setName("target")
        .setDescription("Member you would like to kick.")
        .setRequired(true)
    )
    .addStringOption((option) =>
      option
        .setName("reason")
        .setDescription("The reason fot kicking member provided")
    ),
  async execute(interaction, client) {
    const user = await interaction.options.getUser("target");
    const reason =
      (await interaction.options.getString("reason")) || "No reason provided";
    const member = await interaction.guild.members
      .fetch(user.id)
      .catch(console.error);

    await user
      .send({
        content: `You have been kicked from ${interaction.guild.name}\nReason: ${reason}`,
      })
      .catch("User's DM's are off.");

    await member.kick().catch(console.error);

    await interaction.reply({
      content: `You have been kicked ${user.tag}!`,
    });
  },
};
