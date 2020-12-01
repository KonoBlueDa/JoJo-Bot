const { Command } = require('discord.js-akago');





module.exports = class extends Command {
    constructor() {
        super('Vibe', {
            description: ':VibeCheck:',
            category: 'Fun',
            aliases: ['vb','vibe'],
            cooldown: 0,
        });
    }

    async execute(message) {

        let sentences = [
            '`Awwwwwwww yeah, shake that booty!`',
            '`Its vibe time!`',
            '`iTS lIkE a BuRNinG sUnSet`',
            '`Its vibe time!`',
            '`Its vibe time!`',
            '`Talk about passing the vibe check!`',
            '`Put some kick in it!`'
            ]
            
            let sentencesRandom = sentences[Math.floor(Math.random() * sentences.length)]
                    message.channel.send(sentencesRandom)
        

let gifs = [
'https://tenor.com/view/jojo-dance-busy-gif-12367770',
'https://tenor.com/view/jojo-vibe-jjba-gif-18133386',
'https://tenor.com/view/jojo-jojos-bizarre-adventures-jjba-dance-stand-power-gif-16973875',
'https://tenor.com/view/torture-dance-gif-14760311',
'https://i.pinimg.com/originals/b7/d0/86/b7d086ebbbed08792c2d77570eab5197.gif',
'https://gfycat.com/ajardiscretebuzzard-animation-dancing-jojokes-jjba',
'https://i.pinimg.com/originals/5f/9f/46/5f9f46084992cd96ec1788f1b0c7194c.gif'
]

let gifsRandom = gifs[Math.floor(Math.random() * gifs.length)]
        message.channel.send(gifsRandom)
    }
};