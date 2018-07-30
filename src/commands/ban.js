// Logging and cases soon

module.exports = {
  help: {
    name: 'ban',
    aliases: ['b'],
    args: '[user] <reason>',
    desc: 'Bans a user!'
  },
  async execute(args, client, msg) {
    if(!args)
      return msg.channel.send('⚠ | No user specified');
    let reason = msg.content.slice(3).split(/ +/);
    msg.reply(reason || 'None');
  }
}
