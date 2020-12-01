const { Command } = require('discord.js-akago');





module.exports = class extends Command {
    constructor() {
        super('Vibecheck', {
            description: ':vibecheck:',
            category: 'Fun',
            aliases: ['vc','vibecheck'],
            cooldown: 0,
        });
    }

    async execute(message) {

        message.channel.send(':hand_splayed:')

        let sentences = [
            '`Dead vibes, n i c e.`',
            '`Good vibes yes.`',
            '`You have passed yes`',
            '`Go celebrate, you have good vibes yes.`',
            '`You suc lmao`',
            '`Ew bad vibes, get away`',
            '`Im not gonna even check`'
            ]
            
            let sentencesRandom = sentences[Math.floor(Math.random() * sentences.length)]
                    message.channel.send(sentencesRandom)

    }
};