const discord = require("discord.js");
const lang = require("../lang.json");

module.exports.run = async (bot, message, args) => {

    var updatever = args[0];
    if (!args[0]) return message.reply("Gebruik ;update **[versie]**. (zonder . tussen nummers)");
    if (updatever == 100) {
        return message.channel.send("**Update 1.0**\nMe was created:tada:") 
    } else if (updatever == 101) {
        return message.channel.send("**Update 1.0.1**\nBugg fixing")
    } else if (updatever == 102) {
        return message.channel.send("**Update 1.0.2**\nBugg fixing")
    } else if (updatever == 110) {
        return message.channel.send("Update 1.1!:tada: \n**1.** ;tempban \n**2.** ;hw \n**3.** ;datum \n**4.** ;changelog \n**5.** Update message")
    } else if (updatever == 111) {
        return message.channel.send("**Update 1.1.1**\nKick en ban commands waren broken door update van node.js. Probleem verholpen (Verandering van 2 lines)\nAls het goed is zouden de buggs rond het kicken en bannen verholpen zijn. \nZie je een bug? Dm Double_Gezicht \n**(Update 1.1.1)**")
    } else if (updatever == 112) {
        return message.channel.send("**Update 1.1.2**\nUpdate van het ;update scherm (versie's toegevoegd.).\n;Info update.\nNog wat kleinen aanpassingen en andere minor bugs.\nZie je een bug? Dm Double_Gezicht **(update 1.1.2)")
    } else if (updatever == 113) {
        return message.channel.send("**Update 1.1.3!**\n**1.**;idee voor community ideeën channel ( #ideeën ).\nAls je een bug vindt report hem aan Double_Gezicht")
    }else if (updatever == 114){
        return message.channel.send("**Update 1.1.4!**\n**1.** ;doei *(requested)*\n**2.** ;kill *(Halloween Special)*\n**3.** ;revive *(Halloween Special)*\n**4.** Cooldowns.\n**5.** ;help update\nAls je een bug vindt report hem aan Double_Gezicht")
    } else if (updatever == 120){
        return message.channel.send("**Update 1.2!:tada:**\n\n**:musical_note: Muziek:**\n**1.** ;play\n**2.** ;pause\n**3.** ;skip\n**4.** ;volume\n**5.** ;resume\n**6.** ;leave\n**7.** ;queue\n**8.** ;search\n\n**Overig:**\n**1.** ;quoutes\n**2,** ;code\n**3.** ;bug\n**4.** ;toets\n**5.** ;help update\nAls je een bug vindt report hem met ;bug")
    } else if (updatever == 121){
        return message.channel.send("**Update 1.2.1!:tada:**\n**1.** Prefix bug gefixt\n**2.** ;8ball command\n**3.** ;r6 commands\n**4.** Docenten lijst change.\nAls je een bug vindt report hem met ;bug");
    } else if(updatever == 122){
        return message.channel.send("**Update 1.2.2!:tada: \n1.** Bugg Fixing\nAls je een bug vindt report hem met ;bug");
    } else if(updatever == 200){
        return message.channel.send("**Update 2.0!:tada: \n1.** Chourgie Rework naar discord V12!\nAls je een bug vindt report hem met ;bug");
    }else {
        return message.channel.send("Gebruik ;update **[versie]** (Voorbeeld ;update 111 (1.1.1).)")
    }
}

module.exports.help = {
    name: 'update',
    desc: "Krijg alle Update informatie.",
    cat: "Algemeen"
}