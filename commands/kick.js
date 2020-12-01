const userReg = RegExp(/<@!?(\d+)>/)
const Discord = require('discord.js');
const moment = require('moment')
const { Command } = require('discord.js-akago')

module.exports = class extends Command {
	constructor() {
		super('Kick', {
			description: `With this command, you can ban someone but however you need the \`KICK_MEMBERS\` permission to use this command!`,
			category: 'Moderation',
            cooldown: 0,
            nsfw: false,
            aliases: ['kick'],
        
		});
	}

	async execute(message, args, client) {
        const userID = userReg.test(args[0]) ? userReg.exec(args[0])[1] : args[0]
        const mentionedUser = await message.client.users.fetch(userID).catch(() => null)
        if(!message.member.hasPermission('KICK_MEMBERS')){
            let permsEmbed = new Discord.MessageEmbed()
            .setDescription(`You don't have permission to use this command! Members with the \`KICK_MEMBERS\` permission can use this command!`)
            .setTimestamp()
            .setColor('RED')
            return message.channel.send(permsEmbed)
        } else if(!message.guild.me.hasPermission('KICK_MEMBERS')){
            return message.channel.send(`I don't have permission to ban members! Please give me the permission!`)
        } else if (!mentionedUser){
            return message.channel.send(`Please mention a member!`)
        }

        const allBans = await message.guild.fetchBans()

        if(allBans.get(mentionedUser.id)){
            return message.channel.send('This user is already kicked!')
        }
        const mentionedMember = message.guild.members.cache.get(mentionedUser.id)

        if(mentionedMember){
            const mentionedPosition = mentionedMember.roles.highest.position
            const memberPosition = message.member.roles.highest.position
            const botPosition = message.guild.me.roles.highest.position
        

        if(memberPosition <= mentionedPosition){
            return message.channel.send(`You can't do that because their role is higher or equal to your role!`)
        } else if(botPosition <= mentionedPosition){
            return message.channel.send(`My role is lower or equal to their role, I can't do that!`)
        }

    }
    const reason = args.slice(1).join(' ') || 'No reason given'

try {
    await mentionedMember.kick([reason])
    let finalEmbed = new Discord.MessageEmbed()
    .setColor('RED')
    .setTimestamp()
    .setDescription(`**Kicked ${mentionedUser} | ${reason ? `Reason: ${reason}` : ''}**`)
    message.channel.send(finalEmbed)
} catch (err) {
    console.log(err)
    message.channel.send('There was an error executing this command! Please try again later or report the error with `m! report <message>`')
}
    }
};