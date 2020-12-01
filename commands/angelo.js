const { Command } = require('discord.js-akago');

module.exports = class extends Command {
    constructor() {
        super('Angelo', {
            description: 'Worship our saviour!',
            category: 'Religous',
            aliases: ['ang','angelo','anjuro','Anjuro'],
            cooldown: 0,
        });
    }

    async execute(message) {
        return message.channel.send('https://imgflip.com/gif/36ho35');
    }
};