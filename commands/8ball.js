const { Command } = require('discord.js-akago');

module.exports = class extends Command {
    constructor() {
        super('8Ball', {
            description: 'Ask a question!',
            category: 'Fun',
            aliases: ['ball', '8', '8ball'],
            cooldown: 5,
        });
    }

async execute(message, args) {
      const ball = require("8ball.js");

    const question = args.slice(0).join(" ")
    if(!question) return message.channel.send('`You didn\'t ask a question.`')
    message.channel.send(`${ball()}`)

}

};