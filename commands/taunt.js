const { Command } = require('discord.js-akago');





module.exports = class extends Command {
    constructor() {
        super('Taunt', {
            description: 'Destroy your enemies with a brrage of punches!',
            category: 'Fun',
            aliases: ['tau','taunt'],
            cooldown: 0,
        });
    }

    async execute(message) {

let gifs = [
'https://imgur.com/gallery/oNcHdPX',
'https://tenor.com/view/narancia-golden-wind-jojo-laugh-gif-18820731 ',
'https://tenor.com/view/jojo-jojos-bizarre-adventures-laugh-gif-15566902',
'https://tenor.com/view/jojo-yare-yare-daze-jotaro-good-grief-okay-gif-13569904 ',
'https://tenor.com/view/dio-jojo-youre-approaching-me-jojos-bizarre-adventure-gif-14705619 '
]

let gifsRandom = gifs[Math.floor(Math.random() * gifs.length)]
        message.channel.send(gifsRandom)
    }
};