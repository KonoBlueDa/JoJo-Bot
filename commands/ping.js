const { Command } = require('discord.js-akago');

module.exports = class extends Command {
    constructor() {
        super('Ping', {
            description: 'Command to check if JoJo Bot is still responding.',
            category: 'Utilities',
            aliases: ['ping'],
            cooldown: 0,
        });
    }

    async execute(message) {
        return message.channel.send('`Pong!`');
    }
};