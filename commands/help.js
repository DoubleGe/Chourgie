const discord = require("discord.js");
const botConfig = require("../botconfig.json");
const lang = require("../lang.json");

module.exports.run = async (bot, message, args) => {

     var commandList = [];
     var prefix = botConfig.prefix;

     bot.commands.forEach(command => {

        var constructor ={
            name: command.help.name,
            description: command.help.desc,
            catergory: command.help.cat
        }
        commandList.push(constructor);
     });
     //All Catagories
     var response = "**Bot Commands**\n\n";
     var general = "**Algemeen**\n";
     var admin = "\n**Admin**\n";
     var school = "\n**School**\n";
     var overig = "\n**Overig**\n";

     for (let i = 0; i < commandList.length; i++) {
         const command = commandList[i];

         if(command["catergory"] == "Algemeen"){
             general += `${prefix}${command["name"]} - ${command["description"]}\n`; //Adds Command + Info to the general list.
         } else if (command["catergory"] == "Admin"){
            admin += `${prefix}${command["name"]} - ${command["description"]}\n`; //Adds Command + Info to the admin list.
         } else if (command["catergory"] == "School"){
            if(message.guild.id === "687654086761381934"){
                school+= `${prefix}${command["name"]} - ${command["description"]}\n`; //Adds Command + Info to the school list.
            }
         }else if (command["catergory"] == "Hide"){
            console.log(`${prefix}${command["name"]} - ${command["description"]}`) //Hides the command
        } else {
            overig += `${prefix}${command["name"]} - ${command["description"]}\n`; //Adds Command + Info to the overig list.
         }
     }

     response += general; //Adds the general things to the response
     if (message.member.hasPermission("MANAGE_MESSAGES")) response += admin; //Checks if the sender is an Admin.
     if(message.guild.id === "687654086761381934") response+= school; //Adds the School tab to school server.
     response += overig; //Adds the commands that don't have a catagory.

     message.author.send(response).then(() => { //Sends the full Help message
         message.channel.send("Commands zijn verzonden naar je dm. :mailbox_with_mail:"); //Send message when dm is send.
     }).catch(() =>{
        message.channel.send("Je prive berichten staan uit, dus ik kan je niks versturen."); //Sends message when DM isn't available.
     })

}

module.exports.help = {
    name: 'help',
    desc: "Laat dit zien.",
    cat: "Algemeen"
}