module.exports = {
  data: {
    name: `sub-menu`,
  },
  async execute(interaction, client) {
    await interaction.reply({
      content: `You have selected ${interaction.values[0]}`,
    });
  },
};
