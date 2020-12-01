const { Command } = require('discord.js-akago');

module.exports = class extends Command {
    constructor() {
        super('Response', {
            description: 'Command to check if JoJo Bot is still responding.',
            category: 'Utilities',
            aliases: ['res','response'],
            cooldown: 0,
        });
    }

    async execute(message) {
        return message.channel.send('`JoJo is Responding!`');
    }
};