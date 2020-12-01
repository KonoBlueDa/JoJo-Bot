const { Command } = require('discord.js-akago');





module.exports = class extends Command {
    constructor() {
        super('Timestop', {
            description: 'ZA WARUDOOOOOOOOOOOOOOO',
            category: 'Stand',
            aliases: ['ts','stop', 'timestop'],
            cooldown: 0,
        });
    }

    async execute(message) {

        let sentences = [
            '`ZA WARUDO!`',
            '`ZA WARUDO, TOKI WO TOMAREI!`',
            '`ZA, WARUDO!`',
            '`ZA WARUDO, TOKI WO TOMAREI!`',
            '`ZA WARUDO, TOKI WO TOMAREI!`',
            '`ZA WARUDO!`',
            '`ZA WARUDO!`'
            ]
            
            let sentencesRandom = sentences[Math.floor(Math.random() * sentences.length)]
                    message.channel.send(sentencesRandom)
        

let gifs = [
'https://i.pinimg.com/originals/af/c8/7b/afc87b53146aaeaf78eaad0bb50fd8a2.gif',
'https://tenor.com/view/za-warudo-dio-jojo-the-world-anime-gif-17400969',
'https://tenor.com/view/star-platinum-za-warudo-gif-19172061',
'https://pa1.narvii.com/6276/f4c0498250ee1d28884e5b041c992e82860dbb75_hq.gif',
'https://tenor.com/view/dio-time-stop-jjba-jojo-bizarre-adventure-anime-gif-17790646',
'https://i.pinimg.com/originals/af/c8/7b/afc87b53146aaeaf78eaad0bb50fd8a2.gif',
'https://i.pinimg.com/originals/af/c8/7b/afc87b53146aaeaf78eaad0bb50fd8a2.gif'
]

let gifsRandom = gifs[Math.floor(Math.random() * gifs.length)]
        message.channel.send(gifsRandom)
    }
};