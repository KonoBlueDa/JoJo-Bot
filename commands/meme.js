const { Command } = require('discord.js-akago');





module.exports = class extends Command {
    constructor() {
        super('Meme', {
            description: 'Is tHat a jojoS REfEreNCE?',
            category: 'Fun',
            aliases: ['meme'],
            cooldown: 0,
        });
    }

    async execute(message) {

let gifs = [
'https://tenor.com/view/joseph-joestar-nice-gif-7319727',
'https://tenor.com/view/joseph-joestar-meme-oh-my-god-omg-jojos-bizarre-adventures-gif-17134705',
'https://tenor.com/view/jojo-rero-lero-jojo-rero-rero-lero-lero-jjba-gif-14405506',
'https://tenor.com/view/menacing-jojo-gif-18787204',
'https://tenor.com/view/dio-jojo-gif-7432836',
'https://tenor.com/view/dio-jojo-youre-approaching-me-jojos-bizarre-adventure-gif-14705619',
'https://tenor.com/view/look-at-me-king-crimson-jo-jos-bizarre-adventure-golden-wind-gif-15901739'
]

let gifsRandom = gifs[Math.floor(Math.random() * gifs.length)]
        message.channel.send(gifsRandom)
    }
};