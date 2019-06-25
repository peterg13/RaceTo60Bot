//documentation: https://discord.js.org/#/docs/main/stable/general/welcome

//the file that contains the bot's Discord token (this file is in gitignore)
var discordAuth = require("./discordAuth.json");
//the file that contains the bots Blizzard ID and Secret
var blizzardAuth = require("./blizzardAuth.json");

//necessary import needed for DiscordAPI
const Discord = require('discord.js');
//Discord user client used to run commands
const client = new Discord.Client();
//import for my own Blizzard API
var Blizzard = require('./blizzardAPI.js');
//Referance to our Blizzard API to request from Blizzard
var armory = new Blizzard(blizzardAuth.ID, blizzardAuth.Secret);
//used to make a request from Blizzards API
const request = require('request');

console.log(armory.getToken());



//logs that the bot is logged in
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

  //what happens when a message is received
client.on('message', message => {
    request('https://us.api.blizzard.com/wow/character/Darkspear/Tankadinn?locale=en_US&access_token=USmq2wyVx6hUO2Vm7ZGKwarSLVZTBU01cd', { json: true }, (err, res, body) => {
    if (err) { return console.log(err); }
    console.log(body);
});
  });

//logs the client in
client.login(discordAuth.token);