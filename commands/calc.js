const discord = require("discord.js");
const lang = require("../lang.json");

module.exports.run = async (bot, message, args) => {

    if(args[2] == null) return message.channel.send("Geef getallen mee");
    var getal1 = args[0];
    var factor = args[1];
    var getal2 = args[2];
    
    if(factor == "+"){
        var antoord = (parseInt(getal1) + parseInt(getal2));
        return message.channel.send(getal1 + " + " + getal2 + "= " + antoord );
    } else if (factor == "-"){
        var antoord = getal1 - getal2;
        return message.channel.send(getal1 + " - " + getal2 + "= " + antoord );
    } else if (factor == "/" || factor == ":"){
        var antoord = getal1 / getal2;
        return message.channel.send(getal1 + " / " + getal2 + "= " + antoord );
    } else if (factor == "*" || factor == "x"){
        var antoord = getal1 * getal2;
        return message.channel.send(getal1 + " * " + getal2 + "= " + antoord );
    }

}

module.exports.help = {
    name: 'calc',
    desc: "Ik kan basic dingen voor je uitrekenen.",
    cat: "Overig"
}