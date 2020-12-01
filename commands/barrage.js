const { Command } = require('discord.js-akago');





module.exports = class extends Command {
    constructor() {
        super('Barrage', {
            description: 'Destroy your enemies with a brrage of punches!',
            category: 'Fight',
            aliases: ['bar','barrage'],
            cooldown: 0,
        });
    }

    async execute(message) {
        

let gifs = [
'https://imgur.com/gallery/oNcHdPX',
'https://tenor.com/view/ora-starplatinum-jojosbizarreadventure-jojo-gif-5505650',
'https://i.kym-cdn.com/photos/images/original/001/454/317/150.gif',
'https://tenor.com/view/crazy-diamond-jojo-jojos-bizarre-adventures-jjba-punch-gif-17515056',
'https://tenor.com/view/muda-muda-giorno-giovanna-jo-jo-gold-experience-muda-gif-14208660',
'https://tenor.com/view/the-world-fight-battle-punch-kicking-gif-16610218',
'https://tenor.com/view/tusk-punch-mecha-cartoon-gif-17387471'
]

let gifsRandom = gifs[Math.floor(Math.random() * gifs.length)]
        message.channel.send(gifsRandom)
    }
};