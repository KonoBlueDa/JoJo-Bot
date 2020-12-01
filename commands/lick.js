const { Command } = require('discord.js-akago');





module.exports = class extends Command {
    constructor() {
        super('Lick', {
            description: 'rero rero rero rero-',
            category: 'Fun',
            aliases: ['lik','lick','lero','rero'],
            cooldown: 0,
        });
    }

    async execute(message) {

let gifs = [
'https://tenor.com/view/cherry-tongue-lickit-licking-pussy-gif-15152591',
'https://tenor.com/view/kakyoin-jjba-jo-jos-bizarre-adventure-noriaki-kakyoin-jojo-gif-17648578',
'https://i.pinimg.com/originals/3f/0f/32/3f0f32588374adf2768b223de3503ae8.gif',
'https://i.kym-cdn.com/photos/images/newsfeed/001/187/807/f28.gif',
'https://thumbs.gfycat.com/LeftGoodHapuka-max-1mb.gif',
'https://pa1.narvii.com/5580/ada6fc4874afc522931794a0f3a8c201762fe067_hq.gif'
]

let gifsRandom = gifs[Math.floor(Math.random() * gifs.length)]
        message.channel.send(gifsRandom)
    }
};