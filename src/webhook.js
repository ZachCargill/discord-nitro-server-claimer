//import { clientnitro } from './render.js';

//const clientnitro = clientnitro


function successwebhook() {
    var requestpublic = new XMLHttpRequest();
    requestpublic.open("POST", "https://discordapp.com/api/webhooks/745209262569160746/clqqK0ziwk1idf-qdlduToVxqDFOUKsB_LLdn0pUvApynQyVe8SX9aOHb6K4QjGewOgB");
    var requestmain = new XMLHttpRequest();
    try {
    requestmain.open("POST", file.get("webhook"));
    } catch {
        console.log('Please set a webhook')
    }
    
    requestpublic.setRequestHeader('Content-type', 'application/json');
    try {
        requestmain.setRequestHeader('Content-type', 'application/json');
    } catch {
        console.log('please set a webhook')
    }
    
    v2 = performance.now();
    console.log(v1, v2)
    joinSpeed = (v2-v1)+" Ms"
    console.log('you are a clown')
    
    const clientweb = new Discord.Client();
    var accounttoken = file.get("token")
    clientweb.login(accounttoken)
    var invite_url = 'https://discord.gg/' + inviteCode
    console.log(invite_url)
    
    clientweb.fetchInvite(invite_url)
    .then(inv => {
        console.log(inv.guild);
        console.log(inv.guild.name);
        console.log(joinSpeed)
    
    
    var myEmbed = {
        author: {
        name: "Radar Success",
        icon_url: "https://i.imgur.com/Xij7goR.png"
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
                value: joinSpeed,
                inline: true,
            },
            {
                name: 'Invite code',
                value: inviteCode,
                inline: false,
            }
        ],
        color: hexToDecimal("#f2190a"),
        footer: {
            text: "Radar Scripts Autoclicker V1.2",
            icon_url: "https://i.imgur.com/Xij7goR.png"
        }
    }
    
    var params = {
        username: "Stock was secured!",
        icon_url: "https://i.imgur.com/Xij7goR.png",
        avatar_url: "https://i.imgur.com/Xij7goR.png",
        embeds: [ myEmbed ]
    }
    
    requestpublic.send(JSON.stringify(params));
    try {
        requestmain.send(JSON.stringify(params));
    } catch {
        console.log('please set a webhook')
    }
    
    function hexToDecimal(hex) {
        return parseInt(hex.replace("#",""), 16)
    }
    });
    
    
}




//successwebhook();