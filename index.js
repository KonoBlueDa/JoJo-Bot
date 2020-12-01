const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});
const botconfig = require("./botconfig.json");
const fs = require("fs");
const Akago = require('discord.js-akago');

const client = new Akago.AkagoClient({
    // Akago Client Options
    ownerID: ['666319515998748672'],
    token: '',
}, {
    // Discord.js Client Options
    disableMentions: 'everyone',
});
client.commandHandler = new Akago.CommandHandler(client, {
    commandDirectory: './commands',
    prefix: `jj`,
});
client.listenerHandler = new Akago.ListenerHandler(client, {
    listenerDirectory: './listeners',
});

client.build().then(console.log('Kore Ga.'));
client.build().then(console.log('Requiem.'));
client.build().then(console.log('Da.'));

