require("dotenv").config();
const {token} = process.env;
const { Client, Collection, GatewayIntentBits } = require("discord.js");
const fs = require("fs");

const { Guilds, GuildMessages, GuildMessageReactions} = GatewayIntentBits

const client = new Client({ intents: [Guilds, GuildMessages, GuildMessageReactions] }); // 32767 code accepts all intents
client.commands = new Collection();
client.buttons = new Collection();
client.selectMenus = new Collection();
client.modals = new Collection();
client.commandArray = [];

const fucntionFolder = fs.readdirSync(`./src/functions`);
for (const folder of fucntionFolder) {
  const functionFiles = fs
    .readdirSync(`./src/functions/${folder}`)
    .filter((file) => file.endsWith(".js"));
  for (const file of functionFiles)
    require(`./functions/${folder}/${file}`)(client);
}

client.handleEvents();
client.handleCommands();
client.handleComponents();
client.login(token);