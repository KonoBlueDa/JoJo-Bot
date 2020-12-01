const { Listener } = require('discord.js-akago');
const Discord = require('discord.js');

module.exports = class extends Listener  {
    constructor() {
        super('ready', {
            once: false,
        });
    }

    async execute(member) {
       
        this.client.user.setActivity(` ${this.client.users.cache.size} users! | jj help | https://bit.ly/invitejojo`, { type: 'LISTENING' })
    }

};