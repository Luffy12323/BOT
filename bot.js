const Discord = require('discord.js');
const client = new Discord.Client();
const bot = new Discord.Client();
const prefix = "-";
client.on('ready', () => {
  console.log('╔[════════════════════════════════════]╗');
  console.log('')
  console.log('            ╔[════════════]╗')
  console.log('              Bot Is Online')
  console.log('            ╚[════════════]╝')
  console.log('')
  console.log(`Logged in as ${client.user.tag}!`);
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log('')
  console.log('By Osama_DK')
  console.log('')  
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log('')
  console.log('╚[════════════════════════════════════]╝')
});



client.on('ready', () => {
    client.user.setGame("STOREXCRAFT")	
});


client.on('message', msg => {
  if(msg.content === 'هلا')
  msg.reply('هلا بيك حبي')
});


client.on('message', msg => {
  if(msg.content === 'مرحبا')
  msg.reply('هلا بيك حبي')
});

client.on('message', msg => {
  if(msg.content === 'السلام عليكم')
  msg.reply('وعليكم السلام')
});

client.on('message', msg => {
  if(msg.content === 'سلام عليكم')
  msg.reply('وعليكم السلام')
});

client.on('message', msg => {
  if(msg.content === 'هلا شباب')
  msg.reply('هلا بيك')
});

client.on('message', msg => {
  if(msg.content === 'شباب')
  msg.reply('???')
});

client.on('message', msg => {
  if(msg.content === 'ههه')
  msg.reply('ددووم يا رب')
});

client.on('message', msg => {
  if(msg.content === 'هههه')
  msg.reply('ددووم يا رب')
});

client.on('message', msg => {
  if(msg.content === 'ههههه')
  msg.reply('ددووم يا رب')
});

client.on('message', msg => {
  if(msg.content === 'هههههه')
  msg.reply('ددووم يا رب')
});

client.on('message', msg => {
  if(msg.content === 'ههههههه')
  msg.reply('ددووم يا رب')
});

client.on('message', msg => {
  if(msg.content === 'هههههههه')
  msg.reply('ددووم يا رب')
});
client.on('message', msg => {
  if(msg.content === 'ههههههههه')
  msg.reply('ددووم يا رب')
});
client.on('message', msg => {
  if(msg.content === 'هههههههههه')
  msg.reply('ددووم يا رب')
});
client.on('message', msg => {
  if(msg.content === 'ههههههههههه')
  msg.reply('ددووم يا رب')
});
client.on('message', msg => {
  if(msg.content === 'هههههههههههه')
  msg.reply('ددووم يا رب')
});
client.on('message', msg => {
  if(msg.content === 'ههههههههههههه')
  msg.reply('ددووم يا رب')
});
client.on('message', msg => {
  if(msg.content === 'هههههههههههههه')
  msg.reply('ددووم يا رب')
});
client.on('message', msg => {
  if(msg.content === 'ههههههههههههههه')
  msg.reply('ددووم يا رب')
});

client.on('message', msg => {
  if(msg.content === 'hhh')
  msg.reply('ددووم يا رب')
});

client.on('message', msg => {
  if(msg.content === 'hhh')
  msg.reply('ددووم يا رب')
});

client.on('message', msg => {
  if(msg.content === 'hhhh')
  msg.reply('ددووم يا رب')
});

client.on('message', msg => {
  if(msg.content === 'hhhhh')
  msg.reply('ددووم يا رب')
});

client.on('message', msg => {
  if(msg.content === 'hhhhhh')
  msg.reply('ددووم يا رب')
});

client.on('message', msg => {
  if(msg.content === 'hhhhhhh')
  msg.reply('ددووم يا رب')
});

client.on('message', msg => {
  if(msg.content === 'hhhhhhhh')
  msg.reply('ددووم يا رب')
});

client.on('message', msg => {
  if(msg.content === 'hhhhhhhhh')
  msg.reply('ددووم يا رب')
});

client.on('message', msg => {
  if(msg.content === 'hi')
  msg.reply('Hi !')
});

client.on('message', msg => {
  if(msg.content === 'hi guys')
  msg.reply('hi my friend')
});

client.on('message', msg => {
  if(msg.content === 'hello')
  msg.reply('Welcome')
});

client.on('message', msg => {
  if(msg.content === 'tnx')
  msg.reply('np')
});

client.on('message', msg => {
  if(msg.content === 'thx')
  msg.reply('np')
});

client.on('message', msg => {
  if(msg.content === 'زق')
  msg.reply('انت الزق')
});

client.on('message', msg => {
  if(msg.content === 'خرة')
  msg.reply('انت الخرة')
});

client.on('message', msg => {
  if(msg.content === 'كلب')
  msg.reply('انت كلب')
});

client.on('message', msg => {
  if(msg.content === 'حيوان')
  msg.reply('انت حيوان')
});


 


      client.on('message',function(message) {
  if (message.author.bot) return;


                  if(!message.channel.guild) return;

                    if (message.content === prefix + "mb") {
 const embed = new Discord.RichEmbed()

    .setDescription(`**Members info ✨
💚 online:   ${message.guild.members.filter(m=>m.presence.status == 'online').size}
❤  dnd:       ${message.guild.members.filter(m=>m.presence.status == 'dnd').size}
💛  idle:     ${message.guild.members.filter(m=>m.presence.status == 'idle').size}
💠   membersCount:  ${message.guild.memberCount - message.guild.members.filter(m=>m.user.bot).size}
💡 bots: ${message.guild.members.filter(m=>m.user.bot).size} **`)
         message.channel.send({embed});

    }
      }); 



client.login(process.env.BOT_TOKEN);
