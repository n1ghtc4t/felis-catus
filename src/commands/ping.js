module.exports = {
  help: {
    name: 'ping',
    aliases: ['p'],
    args: '',
    desc: 'pings Felis and returns API and bot latency'
  },
  async execute(args, client, msg) {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let randV = vowels[Math.floor(Math.random() * vowels.length)];

    let message = await msg.channel.send(`P${randV}ng!`);
    let pingyboye = message.createdTimestamp;

    message.edit(`P${randV}ng!\n\nAPI Latency: ${Math.round(client.ping)}ms\nMessage: ${pingyboye - msg.createdTimestamp}ms`);
  }
}
