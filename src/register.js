require("dotenv").config();
const { REST, Routes} = require("discord.js");

const commands = [
    {
        name: "hello",
        description: "sais hello",
    },
    {
        name: "ping",
        description: "pong",
    },
];

const rest = new REST({version: "10"}).setToken(process.env.TOKEN);

(async () => {
    try{
        console.log("regestiring slash commands")

        await rest.put(
            Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.GUILD_ID),
            {body: commands}
        )
        console.log("succesfuly registered")
    } catch(error){
        console.log(`There was an error: ${error}`);
    }
})();
