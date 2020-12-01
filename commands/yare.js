const { Command } = require('discord.js-akago');





module.exports = class extends Command {
    constructor() {
        super('Yare', {
            description: 'Destroy your enemies with a brrage of punches!',
            category: 'Fun',
            aliases: ['yare','daze', 'good grief'],
            cooldown: 0,
        });
    }

    async execute(message) {

        message.channel.send('`Yare Yare`')

let gifs = [
'https://tenor.com/view/yare-good-grief-jotaro-kujo-gif-16255655',
'https://tenor.com/view/yare-anime-cop-hat-down-gif-15462512',
'https://gfycat.com/farlittleadmiralbutterfly',
'https://tenor.com/view/jojo-good-grief-jojos-bizarre-adventure-anime-gif-7887741'
]

let gifsRandom = gifs[Math.floor(Math.random() * gifs.length)]
        message.channel.send(gifsRandom)
    }
};