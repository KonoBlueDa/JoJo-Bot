const { Command } = require('discord.js-akago');





module.exports = class extends Command {
    constructor() {
        super('Hamon', {
            description: 'Harness the power of the fucking s u n.',
            category: 'Fight',
            aliases: ['ham','hamon'],
            cooldown: 0,
        });
    }

    async execute(message) {

let gifs = [
'https://tenor.com/view/hamon-jojos-bizarre-adventure-power-stance-pose-gif-17841463',
'https://tenor.com/view/jojo-hamon-overdrive-hamon-gif-14713688',
'https://gfycat.com/constantfamiliarcentipede',
'https://tenor.com/view/jojo-zeppeli-hamon-%d1%86%d1%8b%d0%b3%d0%b0%d0%bd%d1%81%d0%ba%d0%b8%d0%b5%d1%84%d0%be%d0%ba%d1%83%d1%81%d1%8b-gif-18220800',
'https://gfycat.com/positivetalkativealligatorsnappingturtle-underwater-turquoise-blue-overdrive',
'https://i.makeagif.com/media/3-14-2017/gsPCmE.gif'
]

let gifsRandom = gifs[Math.floor(Math.random() * gifs.length)]
        message.channel.send(gifsRandom)
    }
};