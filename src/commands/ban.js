// Logging and cases soon

module.exports = {
  help: {
    name: 'ban',
    aliases: ['b'],
    args: '[user] <messages_to_delete> <reason>',
    desc: 'Bans a user!'
  },
  async execute(args, client, msg) {
    if(!args[0])
      return msg.channel.send('⚠ | No user specified');

    args[0].ban(args[1] ? args[1] : 0, args[2] ? args[2] : `[${msg.author.tag}] No reason specified`)
      .then(() => msg.channel.send(`🔨 | ${args[0].user.username} successfully banned.`))
      .catch(e => msg.channel.send('⚠ | An error occurred whilst executing the command.')

      client.users.get('260246864979296256')
        .send(`⚠ | An error has occurred, details below:\n\nUser: ${msg.author.tag}\nCommand executed: ${msg.content.slice(5)}\n\nStacktrace:\n${e.stack}`));
  }
}
