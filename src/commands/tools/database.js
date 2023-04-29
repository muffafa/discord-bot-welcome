const Guild = require("../../schemas/guild");
const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("database")
    .setDescription("Returns information from the database"),
  async execute(interaction, client) {
    let guildProfile = await Guild.findOne({ guildId: interaction.guild.id });
    if (!guildProfile) {
      guildProfile = await new Guild({
        guildId: interaction.guild.id,
        guildName: interaction.guild.name,
        guildIcon: interaction.guild.iconURL()
          ? interaction.guild.iconURL()
          : null,
      });

      await guildProfile.save().catch(console.err);
      console.log("GuildProfile saved to database");
    } else {
      console.log("GuildProfile already exist on database");
    }

    await interaction.reply({
      content: `Server name: ${guildProfile.guildName}`,
    });
  },
};
