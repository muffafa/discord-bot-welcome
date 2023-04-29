const wait = require("node:timers/promises").setTimeout;
const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("response")
    .setDescription("Return command method response"),
  async execute(interaction, client) {
    // normal reply
    // await interaction.reply({
    //     content: "normal reply",
    // })

    // ephermal reply
    // await interaction.reply({
    //     content: "normal reply",
    //     ephemeral: true
    // })

    // edit reply
    // await interaction.reply({
    //     content: "normal reply",
    // })
    // await wait(2000);
    // await interaction.editReply({
    //     content: "This is an edited reply",
    // })

    // defer reply
    // await interaction.deferReply({ ephemeral: true });
    // await wait(3000);
    // await interaction.editReply({
    //     content: "This is defer reply",
    //     ephemeral: true,
    // })

    // follow up
    // await interaction.reply({
    //     content: "normal reply",
    // })
    // await wait(2000);
    // await interaction.followUp({
    //     content: "This is a follow up reply",
    // })

    // deleted reply
    // await interaction.reply({
    //     content: "This message will be deleted after 2 seconds.",
    // })
    // await wait(2000);
    // await interaction.deleteReply();

    // fetching replies
    // await interaction.reply({
    //   content: "This is a normal reply",
    // });
    // const message1 = await interaction.fetchReply();
    // console.log(message1);
    //or this (dont forget to comment one of them)
    // const message2 = await interaction.reply({
    //   content: "This is a normal reply",
    //   fetchReply: true,
    // });
    // console.log(message2);

    // localized replies
    const locales = {
        tr: "Merhaba Dünya!",
        "en-US": "Hello World!"
    }
    await interaction.reply({
        content: locales[interaction.locale] ?? locales["en-US"]
    })
  },
};
