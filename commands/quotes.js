const discord = require("discord.js");
const lang = require("../lang.json");

module.exports.run = async (bot, message, args) => {

    var quotes = [
        "Enkel omdat iets niet doet wat je dacht dat het zou doen, betekent niet dat het nutteloos is.",
        "De fantasie is alleen maar vruchtbaar als zij nutteloos is.",
        "Niets is zo vermoeiend als besluiteloosheid, en niets is zo nutteloos.",
        "Er is niets zo nutteloos om dat efficiënt te doen wat eigenlijk niet gedaan zou moeten worden.",
        "De strijd om de vraag of de man of de vrouw waardevoller is, is even nutteloos als de discussie over de vraag wat zwaarder is, een kilo ijzer of een kilo veren.",
        "Over de dingen die voorbij zijn, is het nutteloos te praten.",
        "Koop iets dat compleet nutteloos is, dat is de leukste manier van geld uitgeven.",
        "Alle kunst is volkomen nutteloos.",
        "Het is beter nutteloze dingen te weten dan helemaal niets.",
        "De mooiste woorden ter wereld zijn gewoon nutteloze geluiden als je ze niet begrijpt.",
        "De wreedst denkbare marteling zou zijn, iemand te dwingen tot volstrekt nutteloze en onzinnige arbeid.",
        "De mensen kennen het nut van het nutteloze niet.",
        "Als je een volmaakt nutteloze middag kunt doorbrengen op een volmaakt nutteloze manier, heb je geleerd te leven.",
        "De nutteloze wetten verzwakken de noodzakelijke.",
        "Het leven van een mens is wat zijn gedachten ervan maken.",
        "Meer dan het verleden interesseert mij de toekomst, want daarin ben ik van plan te leven.",
        "Zwijgen leren we pas in de loop van ons leven; spreken leren wij al eerder.",
        "Te leven is een gunst, te weten hoe is een kunst.",
        "De mens is een sociaal dier, hij is niet gemaakt om alleen te leven.",
        "De kunst van te leven is thuis te zijn alsof men op reis is.",
        "Er zijn slechts twee manieren om je leven te leven: doen alsof niets een wonder is, en doen alsof alles een wonder is.",
        "Drie essentiële zaken voor geluk in dit leven zijn, iets te doen te hebben, iets om van te houden, en iets om voor te te hopen.",
        "Een leven zonder dromen is als een tuin zonder bloemen.",
        "Hoe wilt u de dood begrijpen? U begrijpt het leven nog niet eens.",
        "Het mooiste van alles dat wijsheid ons biedt om het leven prachtig te maken, is zonder twijfel vriendschap.",
        "Het leven is geen soepstengel.",
        "Wie niet waagt wie niet wint.",
        "619497624 x 182232495 = is meer dan 10",
        "Quoteloos sorry, probeer opnieuw",
        "Liever 10 vogels in de lucht dan er 1 op je hand. Oohh... wacht verkeerd om.",
        "Twee dingen zijn oneindig: het universum en de menselijke domheid; en ik ben niet zeker over het universum.",
        "End life epic backflip :regional_indicator_l: :regional_indicator_o: :regional_indicator_l:"
    ];
    var random = Math.round(Math.random() * 31);
    var quotesFinal = quotes[random]
    message.channel.send(quotesFinal);
}

module.exports.help = {
    name: 'quotes',
    desc: "Ik zeg een mooie quote.",
    cat: "Overig"
}