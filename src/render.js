const clear = require('clear')
const inquirer = require('inquirer')
const figlet = require('figlet')
const Discord = require("discord.js");
const axios = require('axios').default;
const request = require('request');
//const { performance } = require('perf_hooks');
//const { app } = require('electron');
//userpath = app.getPath('userData')

// Buttons
const startBtn = document.getElementById('startBtn')
const stopBtn = document.getElementById('stopinvBtn')
const stopBtn2 = document.getElementById('stopnitroBtn')
const saveBtn = document.getElementById('saveBtn')
const stoplinkBtn = document.getElementById('stoplinkBtn')
const invBtn = document.getElementById('invBtn')
const nitroBtn = document.getElementById('nitroBtn')
//const webSaveBtn = document.getElementById('web')

var eButton = document.querySelector("saveBtn");
var isPink = false;

// Exports

//module.exports = clientnitro
        



/*async function successwebhook(){
    var request = new XMLHttpRequest();
    request.open("POST", "https://discordapp.com/api/webhooks/740643204088594555/3hzXFq3Mtz44APQJuSguIzElq3aM8bBBlHC_ZqdL36DIJXnvU4Pxx-5vJ12NYFPhwf2Q");

    request.setRequestHeader('Content-type', 'application/json');

    const clientweb = new Discord.Client();
    var accounttoken = 'NzEwODQxMDk4MDMyOTA2MzAw.XzUamg.iCBizK2rXFungXG70ZvMRFgjtQs'
    clientweb.login(accounttoken)

    clientweb.fetchInvite('https://discord.gg/umcngq')
    .then(inv => {
        console.log(inv.guild);
        console.log(inv.guild.name);


    var myEmbed = {
        author: {
        name: "Radar Success",
        icon_url: "https://i.imgur.com/PHef8Fp.png"
        },
        title: "BRRRRRRRRRRRRRRRRRRR",
        fields: [
            {
                name: "Server Name",
                value: inv.guild.name,
                inline: true,
            },
            {
                name: "Speed",
                value: "placeholder",
                inline: true,
            },
            {
                name: 'Invite code',
                value: 'inviteCode',
                inline: false,
            }
        ],
        color: hexToDecimal("#f2190a"),
        footer: {
            text: "Radar Scripts Autoclicker V1.2",
            icon_url: "https://i.imgur.com/PHef8Fp.png"
        }
    }

    var params = {
        username: "Stock was secured!",
        icon_url: "https://i.imgur.com/PHef8Fp.png",
        embeds: [ myEmbed ]
    }

    request.send(JSON.stringify(params));

    function hexToDecimal(hex) {
        return parseInt(hex.replace("#",""), 16)
      }

    })

    

}*/

function autoInviteJoiner() {
    console.log('help')

    
    var accounttoken = mainstore.get('token')
    var burnertoken = mainstore.get('burner')
    console.log(mainstore.get('token'))
    console.log(accounttoken)
    console.log(`Provided account token: ${accounttoken}`)
    const clientnitro = new Discord.Client();
    const clientburner = new Discord.Client();

    clientnitro.on('ready', () => {
        console.log(`[${clientnitro.user.tag}] Monitoring for Server Invites ...`)

        function pushmonitoringinvtoconsole() {
            console.log('I have been pressed')
            var br = document.createElement("br");
            var span = document.createElement('span')
            var div = document.getElementById('rd-box')
            span.textContent = `[${clientnitro.user.tag}] Monitoring for Server Invites ...`;
            div.appendChild(br);
            div.appendChild(span);
        }
        function pushloggedininvtoconsole() {
            console.log('I have been pressed')
            var br = document.createElement("br");
            var span = document.createElement('span')
            var div = document.getElementById('rd-box')
            span.textContent = `Logged in as ${clientnitro.user.tag} for Discord Server Invite Monitoring`;
            div.appendChild(br);
            div.appendChild(span);
        }
        pushloggedininvtoconsole(); 

        pushmonitoringinvtoconsole();

        var ID = clientnitro.user.id
        console.log(ID)
        let guild = clientnitro.guilds.get('729640710487408660')

        try {
            if (guild.member(ID)) {
                console.log('you are authorized')
            } else {
                console.log('you are not authorized')
            }
        } catch {
            console.log('You are not authorized')
            clientnitro.destroy();
            const remote = require('electron').remote
            let w = remote.getCurrentWindow()
            w.close()

        }

    });

    clientburner.on('ready', () => {
        console.log(`[${clientburner.user.tag}] Burner Ready to receive invites!`)
    });

    stopBtn.onclick = function () {
        function pushstopinvtoconsole() {
            console.log('I have been pressed')
            var br = document.createElement("br");
            var span = document.createElement('span')
            var div = document.getElementById('rd-box')
            span.textContent = `[${clientnitro.user.tag}] Stopped Monitoring for Server Invites`;
            div.appendChild(br);
            div.appendChild(span);
        } 
        pushstopinvtoconsole();
        console.log('stopping invites!')
        clientnitro.destroy();
    }
    
    const CHANNEL_ID = mainstore.get('channel')

    clientnitro.on('message', message => {
        if (message.channel.id === CHANNEL_ID) {
            if(message.content.includes('discord.gg/')){
                v1 = performance.now();
                
                

                console.log(`[${clientnitro.user.tag}] Invite found in ${message.guild.name}`);
                var removeFromString = message.content.split('remove ')[1];
                inviteCode = message.content.split('.gg/')[1];
                //var replace = "regex";
                var re = new RegExp(removeFromString,"g");

                if (/\s/.test(inviteCode) || (/-/g.test(inviteCode) || (/_/g.test(inviteCode) || (re.test(inviteCode))))) {

                    var value = inviteCode
                    var newcode = value.replace(/-/g, '').replace(/_/g, '').replace(/\s+/g, '').replace(re, '');
                    //removeChar()
                    if (removeFromString == undefined) {
                        removeFromString = "nothing"
                    } 
                    console.log(`Removed ${removeFromString} from the invite!`)
                    slicedcode = newcode.slice(0, 6);
                    console.log(`Successfully extracted the final code: ${slicedcode} from the invite!`)

                    newInviteUrl = 'https://discord.gg/' + slicedcode
                    //var invite_url = message.content.split('.gg/')[1];
                    //var invite_url = 'discord.gg/' + inviteCode

                    

                    var requestResponse = request.post({
                        url: `https://discordapp.com/api/v6/invites/${slicedcode}`,
                        headers: 
                        {
                        'Authorization': burnertoken
                        },
                    })
                } else {
                    invite_url = 'https://discord.gg/' + inviteCode
        
                    console.log(invite_url)

                    //var servername = 0
    
                    var requestResponse = request.post({
                        url: `https://discordapp.com/api/v6/invites/${inviteCode}`,
                        headers: 
                        {
                        'Authorization': burnertoken
                        },
                    })
                }

                if (requestResponse == 4004) {
                    console.log(`Succesfully Joined Server Invite`)
                    v2 = performance.now();
                    console.log(v1, v2)
                    joinSpeed = (v2-v1)+" Ms"
                    console.log('you are a clown')

                    function pushinvsuccesstoconsole() {
                        console.log('I have been pressed')
                        var br = document.createElement("br");
                        var span = document.createElement('span')
                        var div = document.getElementById('rd-box')
                        span.textContent = `Successfully Joined Server Invite!`;
                        div.appendChild(br);
                        div.appendChild(span);
                    } 
                    pushinvsuccesstoconsole();
                    
                    clientnitro.login(token);

                } else {
                    function pushinvsuccesstoconsole() {
                        console.log('I have been pressed')
                        var br = document.createElement("br");
                        var span = document.createElement('span')
                        var div = document.getElementById('rd-box')
                        span.textContent = `Successfully Joined Server Invite!`;
                        div.appendChild(br);
                        div.appendChild(span);
                    } 
                    pushinvsuccesstoconsole();

                    successwebhook()
                
            
        }
    }
}})
    clientnitro.login(accounttoken)
    .catch(error => {
        if(error.code == 4004) {
            console.log(`[ERROR] - Invalid token`);

            
        } else {
            console.log(`[ERROR] - ${error}`);
        }
    })



    clientburner.login(burnertoken)
    .catch(error => {
        if(error.code == 4004) {
            console.log(`[ERROR] - Invalid burner token`);

            
        } else {
            console.log(`[ERROR] - ${error}`);
        }
    })
}    
function autoNitroClaimer () {
    const accounttoken = mainstore.get('token')
    console.log(`Provided account token: ${accounttoken}`)
    const client = new Discord.Client();

    client.on('ready', () => {
        var ID = client.user.id
        let guild = client.guilds.get('729640710487408660')
        try {
            if (guild.member(ID)) {
                console.log('you are authorized')
            } else {
                console.log('you are not authorized')
            }
        } catch {
            console.log('You are not authorized')
            client.destroy();
            const remote = require('electron').remote
            let w = remote.getCurrentWindow()
            w.close()

        }

        console.log(`[${client.user.tag}] Started Monitoring Discord Servers for Nitro Gifts ...`)
        function pushstartnitrotoconsole() {
            console.log('I have been pressed')
            var br = document.createElement("br");
            var span = document.createElement('span')
            var div = document.getElementById('rd-box')
            span.textContent = `[${client.user.tag}] Started Monitoring for Nitro Gifts ...`;
            div.appendChild(br);
            div.appendChild(span);
        } 
        function pushloggedinnitrotoconsole() {
            console.log('I have been pressed')
            var br = document.createElement("br");
            var span = document.createElement('span')
            var div = document.getElementById('rd-box')
            span.textContent = `Logged in as ${client.user.tag} for Nitro Gift Monitoring`;
            div.appendChild(br);
            div.appendChild(span);
        }
        pushloggedinnitrotoconsole();
        pushstartnitrotoconsole();
    });

    stopBtn2.onclick = function () {
        function pushstopnitrotoconsole() {
            console.log('I have been pressed')
            var br = document.createElement("br");
            var span = document.createElement('span')
            var div = document.getElementById('rd-box')
            span.textContent = `[${client.user.tag}] Stopped Monitoring for Nitro Gifts`;
            div.appendChild(br);
            div.appendChild(span);
        } 
        pushstopnitrotoconsole();
        console.log('stopping nitros!')
        client.destroy()
    }

    // || message.content.includes('discord.com/gifts') || message.content.includes('discordapp.com/gifts')
    client.on('message', message => {
        if(message.content.includes('discord.gift')) {
            if (message.channel.id === CHANNEL_ID) {
                var Nitro = /(discord\.(gift)|discordapp\.com\/gift)\/.+[a-z]/

                var NitroUrl = Nitro.exec(message.content);
                if (!NitroUrl) return console.log("No code")
                var NitroCode = NitroUrl[0].split('/')[1];

                console.log(`Nitro found in ${message.guild.name}`);
                
                axios({
                    method: 'POST',
                    url: `https://discordapp.com/api/v6/entitlements/gift-codes/${NitroCode}/redeem`, 
                    headers: 
                    {
                    'Authorization': client.account_token 
                    }
                }).then(
                    () => console.log(`Successfull redeemed on ${message.guild.name}`)
                ).catch(ex => console.log(`Error | Failed to claim Nitro`))
            }
    
            
        } else if (message.content.includes('discord.com/gifts/')) {
            if (message.channel.id === CHANNEL_ID) {
                var Nitro = /(discord\.(gift)|discordapp\.com\/gift)\/.+[a-z]/
        
                var NitroUrl = Nitro.exec(message.content);
                if (!NitroUrl) return console.log("No code")
                var NitroCode = NitroUrl[0].split('gifts/')[1];
        
                console.log(`Nitro found in ${message.guild.name}`);
                
                axios({
                    method: 'POST',
                    url: `https://discordapp.com/api/v6/entitlements/gift-codes/${NitroCode}/redeem`, 
                    headers: 
                    {
                    'Authorization': client.account_token 
                    }
                }).then(
                    () => console.log(`Successfull redeemed on ${message.guild.name}`)
                ).catch(ex => console.log(`Error | Failed to claim Nitro`))
            }
                   
            
        } else if (message.content.includes('discordapp.com/gifts/')) {
            if (message.channel.id === CHANNEL_ID) {
                var Nitro = /(discord\.(gift)|discordapp\.com\/gift)\/.+[a-z]/
        
                var NitroUrl = Nitro.exec(message.content);
                if (!NitroUrl) return console.log("No code")
                var NitroCode = NitroUrl[0].split('gifts/')[1];
        
                console.log(`Nitro found in ${message.guild.name}`);
                
                axios({
                    method: 'POST',
                    url: `https://discordapp.com/api/v6/entitlements/gift-codes/${NitroCode}/redeem`, 
                    headers: 
                    {
                    'Authorization': client.account_token 
                    }
                }).then(
                    () => console.log(`Successfull redeemed on ${message.guild.name}`),

                ).catch(ex => console.log(`Error | Failed to claim Nitro`))
                    }
                   
            
    }})
    
    client.login(accounttoken)
    .catch(error => {
        if(error.code == 4004) {
            console.log('[ERROR] - Invalid token')

            
        } else {
            console.log(`[ERROR] - ${error}`)
        }
    })
}

function autoLinkOpener() {
    const accounttoken = mainstore.get('token')
    console.log(`Provided account token: ${accounttoken}`)
    const linkclient2 = new Discord.Client();
    
    stoplinkBtn.onclick = function () {
        function pushstoplinktoconsole() {
            console.log('I have been pressed')
            var br = document.createElement("br");
            var span = document.createElement('span')
            var div = document.getElementById('rd-box')
            span.textContent = `[${linkclient2.user.tag}] Stopped Monitoring for Links`;
            div.appendChild(br);
            div.appendChild(span);
        } 
        pushstoplinktoconsole();
        console.log('stopping Links!')
        linkclient2.destroy()
    }

    linkclient2.on('ready', () => {
        var ID = linkclient2.user.id
        let guild = linkclient2.guilds.get('729640710487408660')
        try {
            if (guild.member(ID)) {
                console.log('you are authorized')
            } else {
                console.log('you are not authorized')
            }
        } catch {
            console.log('You are not authorized')
            linkclient2.destroy();
            const remote = require('electron').remote
            let w = remote.getCurrentWindow()
            w.close()

        }
        console.log('links ready')
        function pushstartlinktoconsole() {
            console.log('I have been pressed')
            var br = document.createElement("br");
            var span = document.createElement('span')
            var div = document.getElementById('rd-box')
            span.textContent = `[${linkclient2.user.tag}] Started Monitoring for Links ...`;
            div.appendChild(br);
            div.appendChild(span);
        } 
        function pushloggedinlinktoconsole() {
            console.log('I have been pressed')
            var br = document.createElement("br");
            var span = document.createElement('span')
            var div = document.getElementById('rd-box')
            span.textContent = `Logged in as ${linkclient2.user.tag} for Link Monitoring`;
            div.appendChild(br);
            div.appendChild(span);
        }
        pushloggedinlinktoconsole();
        pushstartlinktoconsole();
    })

    const CHANNEL_ID = mainstore.get('channel')

    linkclient2.on("message", message => {
        if (message.channel.id == CHANNEL_ID) {
            if (message.content.includes('https')) {
                var link = message.content.split('https')[1]
                console.log(link)
                var linktest = `https${link}`
                console.log(`opening ${linktest}`)
                //preventDefault();
                require("electron").shell.openExternal(linktest);
                
            } else {
            // check if an embed contains 'https'
                            console.log('ok')
                            let embed = message.embeds[0], // This is the embed we're searching in.
                            field, text, number;
                            if (!embed) return; // If there are no embeds in the message, return.
    
                            for (let f of embed.fields) { // Loop through every field in the embed...
                                if (f.name == mainstore.get('linkchannel')) { // ...until you find the one named 'Sizes'
                                    field = f; // Then store it into the field variable
                                    break; // Exit the loop
    
                                }
                            }
                            if (!field) return; // If there are no 'Sizes' fields, return.
    
    
                            var link = field.value;
                            console.log(link);
                            console.log(`opening ${link}`);
                            //preventDefault();
                            require("electron").shell.openExternal(link);
                    }
           }
              
        }
    )

    linkclient2.login(accounttoken)
              .catch(error => {
                  if(error.code == 4004) {
                      console.log(`${chalk.red('[ERROR]')} - Invalid token`)
      
                      
                  } else {
                      console.log(`${chalk.red('[ERROR]')} - ${error}`)
                  }
              })
}        

    /*
invBtn.onclick = function () {
    invSelected = true
    autoInviteJoiner()
}


var invtoggle = document.getElementById("invitestoggle");
let invselected = 0
invtoggle.onclick = function () {
    if (invselected == 0) {
        var invselected = 1
        console.log(invselected)
    } else if (invselected == 1) {
        var invselected = 0
        console.log(invselected)
    } else if (invselected == undefined) {
        var invselected = 1;
        console.log(invselected)
    }
}
*/

function exit() {
    return
}



startBtn.onclick = function () {   
    if (invOn == 1) {
        autoInviteJoiner()
    }
    if (nitroOn == 1) {
        autoNitroClaimer()
    }
    if (linkOn == 1) {
        autoLinkOpener()
    }
}




//function exit(event) {
    //console.log('stop the capp')
    //event.preventDefault();
//}

//stopBtn.onclick = exit(autoInviteJoiner())

