const discord = require("discord.js");
const lang = require("../lang.json");

module.exports.run = async (bot, message, args) => {

    if (message.guild.id != "619115676006875158" && message.guild.id != "442743221827797012") return message.reply("Sorry, dit command is op deze server disabled.")

    if (!message.member.roles.find(r => r.name === "Tester")) return message.channel.send("Verwacht in 2.2")

    if (!args[0]) return message.channel.send("Gebruik ;kalender `week` of `add`");
    if (args[0].toLowerCase() == "week") {
        var time = new Date()
        const seconds = time.getSeconds();
        const minutes = time.getMinutes();
        const hour = time.getHours();
        const day = time.getDate();
        var Month = time.getMonth();
        Month++;
        const year = time.getFullYear();

        const dag = time.getDay();
        var weekdag;
        if (dag == 1) weekdag = "Maandag";
        if (dag == 2) weekdag = "Dinsdag";
        if (dag == 3) weekdag = "Woensdag";
        if (dag == 4) weekdag = "Donderdag";
        if (dag == 5) weekdag = "Vrijdag";
        if (dag == 6) weekdag = "Zaterdag";
        if (dag == 7) weekdag = "Zondag";

        return message.channel.send(`**Datum van vandaag: **(${weekdag})\n${day}-${Month}-${year} ${hour}:${minutes}:${seconds}`);
    } else if (args[0].toLowerCase() == "add") {
        if (args[1] && args[2] && args[3]) {
            var week = args[1];
            var datum = args[2];
            var title = args[3];//.  slice('4').join('_');
            var Beschrijving = args.slice(week.length + datum.length + title.length);

            return message.channel.send("Datum toegevoegd aan de kalender\n**Info:**\n**Week: **" + week + "\n**Datum:** " + datum + "\n**Titel:** " +  title + "\n**Beschrijving: **" + Beschrijving);
        } else {
            return message.channel.send("Gebruikt **;kalender week `week` `datum (bv. 10-10-20)` `titel`");
        }
    }

}

module.exports.help = {
    name: 'Kalender',
    desc: "Kalender Command.",
    cat: "Hide"
}