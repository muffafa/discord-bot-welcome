const {
  SlashCommandBuilder,
  StringSelectMenuBuilder,
  ActionRowBuilder,
  StringSelectMenuOptionBuilder,
} = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("menu")
    .setDescription("Returns a select menu!"),
  async execute(interaction, client) {
    const select = new StringSelectMenuBuilder()
      .setCustomId("sub-menu")
      .setPlaceholder("Make a selection!")
      .setMaxValues(1)
      .setMinValues(1)
      .addOptions(
        new StringSelectMenuOptionBuilder()
          .setLabel("Twitter")
          .setDescription("@muffafa")
          .setValue("https://twitter.com/muffafa"),
        new StringSelectMenuOptionBuilder()
          .setLabel("Instagram")
          .setDescription("@muffafa")
          .setValue("https://www.instagram.com/muffafa/"),
        new StringSelectMenuOptionBuilder()
          .setLabel("LinkedIn")
          .setDescription("Muhammed Mustafa (muffafa) Savar")
          .setValue("https://www.linkedin.com/in/muffafa")
      );

    await interaction.reply({
      components: [new ActionRowBuilder().addComponents(select)],
    });
  },
};
