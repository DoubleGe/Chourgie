const discord = require("discord.js");
const lang = require("../lang.json");

module.exports.run = async (bot, message, args) => {

    if(message.channel.type != "dm"){
    if(!args[0]) return message.channel.send("Gebruik: **;Among [Join/Leave/Vote/Game]**")
    let joinRole = message.guild.roles.cache.find(role => role.name == "AMONGJOIN");
    let DeathRole = message.guild.roles.cache.find(role => role.name == "AMONGDEATH");
    let permRole = message.guild.roles.cache.find(role => role.name == "AMONGPERM");
    let channel = message.guild.channels.cache.find(channel => channel.name == "AMONG US POG")
    if(joinRole == null || DeathRole == null || permRole == null) return message.channel.send("Voeg de rollen: **AMONGJOIN**, **AMONGDEATH** & **AMONGPERM** toe aan de server.");
    if(channel == null) return message.channel.send("Maak een Among Us channel aan (Naam: AMONG US POG)");

    if(args[0].toLowerCase() == "join") { //AMONG US Join command.
        	if(message.member.roles.cache.find(r => r.name === "AMONGJOIN")) return message.reply("Je doet al mee aan Among Us. :tada:"); //Finds AMONGJOIN role and returns when the player already has the role.
        message.member.roles.add(joinRole.id); //Adds Role
        return message.channel.send("Je doet nu mee aan Among Us!");
    }
    else if(args[0].toLowerCase() == "leave") { //Among us Leave command.
        if(!(message.member.roles.cache.find(r => r.name === "AMONGJOIN"))) return message.reply("Je doet niet mee dus je mag ook niet leaven..."); //Finds AMONGJOIN role and returns when the player doesn't have it.
        message.member.roles.remove(joinRole.id); //Removes Role
        return message.channel.send("Je doet niet meer mee met Among Us. :confused:");
    }
    else if(args[0].toLowerCase() == "vote") { //Among us Vote command.
        if(!(message.member.roles.cache.find(r => r.name === "AMONGPERM") || message.member.id === "241247327824642051")) return message.channel.send(lang.NO_PERMISSION); //Returns when player doesn't have AMONGPERM or isn't Double_Gezicht
        channel.members.forEach(member => { //Mutes Death and Unmutes Alive.
            if(!(member.roles.cache.find(r => r.name === "AMONGDEATH"))) {
                member.voice.setMute(false);
                member.voice.setDeaf(false);
            } else {
                member.voice.setMute(true);
                member.voice.setDeaf(false);
            }
        });
    } 
    else if(args[0].toLowerCase() == "game") { //Among us Game command.
        if(!(message.member.roles.cache.find(r => r.name === "AMONGPERM") || message.member.id === "241247327824642051")) return message.channel.send(lang.NO_PERMISSION); //Returns when player doesn't have AMONGPERM or isn't Double_Gezicht
        channel.members.forEach(member => { //Mute Alive and Unmute Death.
            if(member.roles.cache.find(r => r.name === "AMONGDEATH")) {
                member.voice.setMute(false);
                member.voice.setDeaf(false);
            } else {
                member.voice.setMute(true);
                member.voice.setDeaf(true);
            }
        });
    } else if (args[0].toLowerCase() == "kick"){ //Among us Kick command.
        if(!(message.member.roles.cache.find(r => r.name === "AMONGPERM") || message.member.id === "241247327824642051")) return message.channel.send(lang.NO_PERMISSION); //Returns when player doesn't have AMONGPERM or isn't Double_Gezicht
        let kickUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if(!(kickUser.roles.cache.find(r => r.name == "AMONGJOIN"))) return message.channel.send(`${kickUser} heeft geen Among Us join rol.`)
        kickUser.roles.remove(joinRole.id);
        return message.channel.send(`${kickUser} is uit de Among Us game geyeeeeett.:athletic_shoe: :dash:`)
    } else if (args[0].toLowerCase() == "end"){ //Among us End command.
        channel.members.forEach(member => {
            if(member.roles.cache.find(r => r.name === "AMONGDEATH")) { //Removes all the Death roles from the players. and unmutes everyone in the channel.
                member.roles.remove(DeathRole.id);
            } 
            member.voice.setMute(false);
            member.voice.setDeaf(false);
        });
    } else if (args[0].toLowerCase() == "forcejoin"){ //Among us ForceJoin Command.
        if(!(message.member.roles.cache.find(r => r.name === "AMONGPERM") || message.member.id === "241247327824642051")) return message.channel.send(lang.NO_PERMISSION); //Returns when player doesn't have AMONGPERM or isn't Double_Gezicht
        let kickUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0])); //Forces the player to join the game.
        if((kickUser.roles.cache.find(r => r.name == "AMONGJOIN"))) return message.channel.send(`${kickUser} doet al mee aan Among Us.`)
        kickUser.roles.add(joinRole.id);
        return message.channel.send(`${kickUser} doet nu verplicht mee met Among Us.`)
    } else if (args[0].toLowerCase() == "clear"){ //Among us Clear Command.
        if(!(message.member.roles.cache.find(r => r.name === "AMONGPERM") || message.member.id === "241247327824642051")) return message.channel.send(lang.NO_PERMISSION); //Returns when player doesn't have AMONGPERM or isn't Double_Gezicht
        message.guild.roles.cache.get(joinRole.id).members.forEach(member => { //Gets all the players with the AMONGJOIN Role
            member.roles.remove(joinRole.id);
        });
        message.guild.roles.cache.get(DeathRole.id).members.forEach(member => { //Gets all the players with the AMONGDEATH Role
            member.roles.remove(DeathRole.id);
        })
        return message.channel.send("Among Us game beeindigd.");
    } 
}
else if (args[0].toLowerCase() ==  "death"){
    var succesBool;
    var today = new Date();
    var date = (today.getHours() + ":" + today.getMinutes() + " " + today.getDate())+'-'+ (today.getMonth()+1)+'-'+today.getFullYear();
    bot.guilds.cache.forEach(server => {
        if(server.roles.cache.find(role => role.name == "AMONGJOIN")){     //Wertk   

            let user = server.members.cache.get(message.author.id); //WERKT
//user.guild.roles.cache.find(r => r.name === "AMONGJOIN"
            //if(bot.guilds.cache.get(server.id).members.cache.get(message.author.id).roles.cache.find(r => r.name === "AMONGJOIN")){ //
                user.guild.roles.add(server.roles.cache.find(role => role.name == "AMONGDEATH"))
                bot.guilds.cache.get(server.id).members.cache.get(message.author.id).roles.add(server.roles.cache.find(role => role.name == "AMONGDEATH"))
                succesBool = true;
                return message.author.send(`:headstone: RIP: ${date}`);
            //} else return message.author.send("Je doet helemaal niet mee gekkie.")
        }
    })
    if(!succesBool) return message.author.send("Dood melden mislukt.");
}
}

module.exports.help = {
    name: 'among',
    desc: "Among Us Commands.",
    cat: "OVerig"
}