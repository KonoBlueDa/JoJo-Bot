const { Command } = require('discord.js-akago');





module.exports = class extends Command {
    constructor() {
        super('Pose', {
            description: 'Show your style!',
            category: 'Fun',
            aliases: ['pos','pose'],
            cooldown: 0,
        });
    }

    async execute(message) {

let gifs = [
'https://i.makeagif.com/media/3-22-2018/plUCzj.gif',
'https://tenor.com/view/joseph-joestar-jojo-jjba-anime-pose-gif-16604735 ',
'https://tenor.com/view/seductive-jojo-anime-strike-apose-werk-it-gif-7428823',
'https://tenor.com/view/jojos-bizarre-adventure-jojos-bizarre-adventure-diu-jojo-koichi-koichi-hirose-jojo-renatojxd-gif-16057945',
'https://tenor.com/view/golden-wind-jojos-bizarre-adventure-gif-12990580',
'https://media1.tenor.com/images/fb20be53e98c248395fbc25d44b6c695/tenor.gif?itemid=19323554'
]

let gifsRandom = gifs[Math.floor(Math.random() * gifs.length)]
        message.channel.send(gifsRandom)
    }
};