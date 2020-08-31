const discord = require("discord.js");
const lang = require("../lang.json");

module.exports.run = async (bot, message, args) => {

    if (message.guild.id != "687654086761381934") return message.reply("Sorry, dit command is op deze server disabled.")

    if (!args[0]) return message.reply("Gebruik ;code [code]");

    var code = args[0];

    if (code == "for"){
        return message.channel.send("**For:** https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/for\n```csharp\nfor (int i = 0; i<length; i++)\n{\n    [Code]\n}```");
    } else if (code == "if"){
        return message.channel.send('**If: **https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/if-else\n```csharp\nif (ExampleBool == true) || (ExampleString == "String Example") || (ExampleInt == 4)\n{\n    [Code];\n}```');
    } else if (code == "while"){
        return message.channel.send('**While:** https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/while\n```csharp\nwhile (ExampleBool == true) || (ExampleString == "String Example") || (ExampleInt == 4)\n{\n    [Code];\n}```')
    } else if (code == "each") {
        return message.channel.send("**For Earch:** https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/foreach-in")
    } else if (code == "function") {
        return message.channel.send("**Functions:** https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/classes-and-structs/methods\n```csharp\nFunction void/int Example()\n{\n    return [var];(Bij gebruik van int)\n}```") 
    } else if (code == "class") {
        return message.channel.send('**Class:** https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/classes-and-structs/classes\n```csharp\nnamespace ExampleNamespace\n{\n    public class ExampleClass\n    {\n        [Code];\n    }\n}```')
    } else if (code == "var") {
        return message.channel.send('**Variable:** https://docs.microsoft.com/en-us/dotnet/csharp/tour-of-csharp/types-and-variables\n```csharp\nnamespace ExampleNamespace\n{\n    public class ExampleClass\n    {\n    int ExampleInt = 4;\n    float ExampleFloat = 4.44f; (7 commagetallen is maximum)\n    double ExampleDouble = 4.44d; (15 commagetallen is maximum)\n    string ExampleString = "String Example"\n    bool ExampleBool = false;\n    }\n}```')
    } else if (code == "array"){
        return message.channel.send('**Array: ** https://docs.microsoft.com/en-us/dotnet/csharp/tour-of-csharp/arrays\n```csharp\nnamespace ExampleNamespace\n{\n    public class ExampleClass\n    {\n     string[] ExampleArray = new string[Groote];\n\n        public void ExampleFunction\n        {\n         ExampleArray[Groote] =  "Example";\n        }\n    }\n}```')
    } else if (code == "list"){
        return message.channel.send("**List: ** https://docs.microsoft.com/en-us/dotnet/api/system.collections.generic.list-1?view=netframework-4.8\n```csharp\nnamespace ExampleNamespace\n{\n    public class ExampleClass\n    {\n        List<int> ExampleIntList = new List<int>();\n        public void ExampleGameStart()\n        {\n            ExampleIntList.Add(4);\n        }\n    }\n}```")
    } else {
        return message.channel.send("Kies uit: for, if, while, each, function, class, var, array, list")
    } 

}

module.exports.help = {
    name: 'code',
    desc: "Krijg kort uitleg over code.",
    cat: "School"
}