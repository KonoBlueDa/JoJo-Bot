const { Command } = require('discord.js-akago');





module.exports = class extends Command {
    constructor() {
        super('Finisher', {
            description: 'End your enemies and claim victory!',
            category: 'Fight',
            aliases: ['fin','finisher','finish'],
            cooldown: 0,
        });
    }

    async execute(message) {

let gifs = [
'https://tenor.com/view/za-warudo-gif-18792622',
'https://cdn.discordapp.com/attachments/776741352801173527/781063912178843698/b5ff3e4a60b04301d56ab151ffee9d21.gif'
]

let gifsRandom = gifs[Math.floor(Math.random() * gifs.length)]
        message.channel.send(gifsRandom)
    }
};