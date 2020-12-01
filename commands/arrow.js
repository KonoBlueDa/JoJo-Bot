const { Command } = require('discord.js-akago');





module.exports = class extends Command {
    constructor() {
        super('Arrow', {
            description: 'Endure the pain of the arrow and join the worthy.',
            category: 'Stand',
            aliases: ['arr','arrow'],
            cooldown: 0,
        });
    }

    async execute(message) {

let stands = [
'`Your stand is the World.`',
'`Your stand is Star Platinum.`',
'`Your stand is Sticky Fingers.`',
'`Your stand is Crazy Diamond.`',
'`Your stand is Gold Experience.`',
'`Your stand is Silver Chariot.`'
]

let standsRandom = stands[Math.floor(Math.random() * stands.length)]
        message.channel.send(standsRandom)
    }
};