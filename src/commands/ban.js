// Logging and cases soon

module.exports = {
  help: {
    name: 'ban',
    aliases: ['b'],
    args: '[user] <reason>',
    desc: 'bans a user!'
  },
  async execute(args, client, msg) {
    let user = msg.mentions.members.first() || msg.guild.members.get(msg.mentions.members.first().id);
    let reason = args.slice(3).join(/ +/);

    if(!user || msg.mentions.members.size > 1)
      return msg.channel.send('⚠ | No user specified or too many users were provided');

    // Deleting messages soon:tm:
    // if(typeof toDelete !== number)
    //   return msg.channel.send('⚠ | Amount of messages to delete is not a number');

    user.ban(reason ? reason : `[${msg.author.tag}] No reason specified`)
      .then(() => msg.channel.send(`🔨 | ${args[0].user.username} successfully banned.`))
      .catch(e => {
        msg.channel.send('⚠ | An error occurred whilst executing the command.')
                  client.users.get('260246864979296256')
                    .send(`⚠ | An error has occurred, details below:\n\n
                      User: ${msg.author.tag}\n
                      Command executed: ${msg.content.slice(5)}\n\n
                      Stacktrace:\n${e.stack}`);
      });
  }
}
