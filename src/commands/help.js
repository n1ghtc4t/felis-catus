const { RichEmbed } = require('discord.js');
const { prefix } = require('../config');

module.exports = {
  help: {
    name: 'help',
    aliases: ['h'],
    args: '[commandName (optional)]',
    desc: 'Lists all commands or gives info on a specific command'
  },
  async execute(args, client, msg) {
    if(!msg.guild.me.permissions.has('EMBED_LINKS'))
      return message.channel.send('⚠ | My help message is embedded and you have not given me the correct permissions to display my help message. Mind giving me that permission?');

    if(!args[0]) {
      const embed = new RichEmbed()
      .setTitle('Felis\' Commands')
      .setColor('RANDOM')
      .setDescription(`Prefix is \`${prefix}\``)
      .addField('General',
`Command: \`ping\`\nUsage: \`${prefix}ping\`\nDescription: pings Felis and returns API and bot latency\n\n
Command: \`help\`\nUsage: \`${prefix}help [commandName (optional)]\`\nDescription: lists all commands or gives info on a specific command`)
      .setFooter('© 2018 - 2019 | Felis catus')

      msg.channel.send({ embed });
    } else {
      let cmd = client.commands.get(args[0])
        || client.commands.find(c => c.help.aliases && c.help.aliases.includes(args[0]));

      try {
        const embed = new RichEmbed()
        .setTitle(`${cmd.help.name} | Usage`)
        .setColor('RANDOM')
        .setDescription(`Command: \`${cmd.help.name}\`\nUsage: \`${prefix}${cmd.help.name} ${cmd.help.args ? cmd.help.args : []}\`\nDescription: ${cmd.help.desc}`)
        .setFooter('© 2018 - 2019 | Felis catus')

        msg.channel.send({ embed });
      } catch(e) {
        msg.channel.send(`⚠ | Command \`${msg.content.slice(5)}\` not found.`)
      }
    }
  }
}
