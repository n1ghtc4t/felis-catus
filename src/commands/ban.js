// Logging and cases soon

module.exports = {
  help: {
    name: 'ban',
    aliases: ['b'],
    args: '[user] <reason>',
    desc: 'Bans a user!'
  },
  async execute(args, client, msg) {
    if(!args[0])
      return msg.channel.send('⚠ | No user specified');

    msg.channel.send(args[1] || 'None');
  }
}
