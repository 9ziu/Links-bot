const Discord = require('discord.js')
const client = new Discord.Client()
const {prefix,token} = require('./config.json')

client.on('ready', message => {
client.user.setActivity('Links bot, By LyricDev', {type:'STREAMING', url:'https://www.twitch.tv/LyricDev'}); 
  console.log('ready!')
});

client.on('message', message => {
  if(message.content.toLowerCase() === prefix + 'link')
         var embed = new Discord.MessageEmbed()
        .setTitle('Links, Share your server')
        .setDescription(`
        ${prefix}avatars : **for Avatars Servers, Sends your server here <#811619673506054165>**
        ${prefix}publics : **for Public Servers, Sends your server here <#811619705994739743>**
        ${prefix}suppots : **for Supports Servers, Sends your server here <#811619781781618718>**
        ${prefix}gaming : **for Games Servers, Sends your server here <#811619784411840534>**
        `)
        .setFooter('all rights reserved to LyricDev © 2021')
        .setTimestamp()
        message.channel.send(embed)
})

client.on("message", message => {
  var avtchannel = client.channels.cache.get('811619673506054165')
  var linkslogs = client.channels.cache.get('811624382144839721')

  if (message.content.startsWith(prefix + "avatars")){
    let args = message.content.split(" ").slice(1);
    let args2 = message.content.split("  ").slice(1);
    if (!args.join(" "))
      return message.reply(`**Server Link please**`);
    avtchannel.send(`${args}`).then(m=>
      {
        message.channel.send(`**Done, your server link is sent ${avtchannel}**`)
      })
    .then(m=>
      {
        const avtlog = new Discord.MessageEmbed()
        .setTitle('New avatar server')
        .setColor('GREY')
        .setDescription(`
       • Server sender : **${message.author.username}**
       • Server sender tag : **${message.author.tag}**
       • Server sender id : **${message.author.id}**
       • Server link : **${args}**
        `)
        .setFooter('all rights reserved to LyricDev © 2021')
        .setTimestamp()
        linkslogs.send(avtlog)
      })
  }
});

client.on("message", message => {
  var servchannel = client.channels.cache.get('811619705994739743')
  var linkslogs = client.channels.cache.get('811624382144839721')

  if (message.content.startsWith(prefix + "publics")){
    let args = message.content.split(" ").slice(1);
    let args2 = message.content.split("  ").slice(1);
    if (!args.join(" "))
      return message.reply(`**Server Link please**`);
    servchannel.send(`${args}`).then(m=>
      {
        message.channel.send(`**Done, your server link is sent ${servchannel}**`)
      })
    .then(m=>
      {
        var servlog = new Discord.MessageEmbed()
        .setTitle('New Public server')
        .setColor('#707070')
        .setDescription(`
       • Server sender : **${message.author.username}**
       • Server sender tag : **${message.author.tag}**
       • Server sender id : **${message.author.id}**
       • Server link : **${args}**
        `)
        .setFooter('all rights reserved to LyricDev © 2021')
        .setTimestamp()
        linkslogs.send(servlog)
      })
  }
});

client.on("message", message => {
  var supportschannel = client.channels.cache.get('811619781781618718')
  var linkslogs = client.channels.cache.get('811624382144839721')

  if (message.content.startsWith(prefix + "supports")){
    let args = message.content.split(" ").slice(1);
    let args2 = message.content.split("  ").slice(1);
    if (!args.join(" "))
      return message.reply(`**Server Link please**`);
    supportschannel.send(`${args}`).then(m=>
      {
        message.channel.send(`**Done, your server link is sent ${supportschannel}**`)
      })
    .then(m=>
      {
        const servlog = new Discord.MessageEmbed()
        .setTitle('New Shop, Support server')
        .setColor('#454545')
        .setDescription(`
       • Server sender : **${message.author.username}**
       • Server sender tag : **${message.author.tag}**
       • Server sender id : **${message.author.id}**
       • Server link : **${args}**
        `)
        .setFooter('all rights reserved to LyricDev © 2021')
        .setTimestamp()
        linkslogs.send(servlog)
      })
  }
});

client.on("message", message => {
  var gamingchannel = client.channels.cache.get('811619784411840534')
  var linkslogs = client.channels.cache.get('811624382144839721')

  if (message.content.startsWith(prefix + "gaming")){
    let args = message.content.split(" ").slice(1);
    let args2 = message.content.split("  ").slice(1);
    if (!args.join(" "))
      return message.reply(`**Server Link please**`);
    gamingchannel.send(`${args}`).then(m=>
      {
        message.channel.send(`**Done, your server link is sent ${gamingchannel}**`)
      })
    .then(m=>
      {
        const servlog = new Discord.MessageEmbed()
        .setTitle('New Gaming server')
        .setColor('#303030')
        .setDescription(`
       • Server sender : **${message.author.username}**
       • Server sender tag : **${message.author.tag}**
       • Server sender id : **${message.author.id}**
       • Server link : **${args}**
        `)
        .setFooter('all rights reserved to LyricDev © 2021')
        .setTimestamp()
        linkslogs.send(servlog)
      })
  }
});

client.login(token)
