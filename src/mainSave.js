// Libraries
const Store = require('electron-store');
const editJsonFile = require("edit-json-file");
var os = require('os');

// Config File
var dir = os.userInfo().homedir
let file = editJsonFile(`${userpath}/config.json`);
var token = file.get("token");
console.log(token)
var channel = file.get("channel");
var burner = file.get("burner");
var linkchannel = file.get("linkchannel");
var invBox = document.getElementById('invitestoggle')
var nitroBox = document.getElementById('nitrostoggle')
var linkBox = document.getElementById('linkstoggle')

//button 
const mainSaveBtn = document.getElementById('saveBtn')

const mainstore = new Store();

var invcheckbox = document.getElementById("invitestoggle")
invselected = 0


invcheckbox.addEventListener('click', function () {
    if(invselected == 0) {
        invselected = 1
        console.log(invselected)
        invOn = 1
    } else {
        invselected = 0
        console.log(invselected)
        invOn = 0
    }
})
invOn = 0
nitroOn = 0
linkOn = 0
var nitrocheckbox = document.getElementById("nitrostoggle")
var nitroSelected = 0
nitrocheckbox.addEventListener('click', function () {
    if(nitroSelected == 0) {
        nitroSelected = 1
        console.log(nitroSelected)
        nitroOn = 1
    } else {
        nitroSelected = 0
        console.log(nitroSelected)
        nitroOn = 0
    }
})
var linkcheckbox = document.getElementById("linkstoggle")
linkselected = 0


linkcheckbox.addEventListener('click', function () {
    if(linkselected == 0) {
        linkselected = 1
        console.log(linkselected)
        linkOn = 1
    } else {
        linkselected = 0
        console.log(linkselected)
        linkOn = 0
    }
})




if (token != undefined) {
    document.getElementById('token').value = token;
}
if (token != undefined) {
    document.getElementById('channel').value = channel;
}
if (token != undefined) {
    document.getElementById('burner').value = burner;
}
if (token != undefined) {
    document.getElementById('linkchannel').value = linkchannel;
}
if (mainstore.get('invselected') == 'on') {
    invBox.click()
}
if (mainstore.get('nitroselected') == 'on') {
    nitroBox.click()
}
if (mainstore.get('linkselected') == 'on') {
    linkBox.click()
}






//const mainstore = new Store();
mainSaveBtn.onclick = function () {
    console.log('Im here')
    mainstore.set('token', document.getElementById('token').value);
    mainstore.set('channel', document.getElementById('channel').value);
    mainstore.set('burner', document.getElementById('burner').value);
    mainstore.set('linkchannel', document.getElementById('linkchannel').value);
    if (invselected == 0) {
        mainstore.set('invselected', 'off');
    } else {
        mainstore.set('invselected', 'on');
    }
    if (nitroSelected == 0) {
        mainstore.set('nitroselected', 'off');
    } else {
        mainstore.set('nitroselected', 'on');
    }
    if (linkselected == 0) {
        mainstore.set('linkselected', 'off');
    } else {
        mainstore.set('linkselected', 'on');
    }

    console.log('I have been pressed')
    var br = document.createElement("br");
    var span = document.createElement('span')
    var div = document.getElementById('rd-box')
    span.textContent = `Saved Input Details`;
    div.appendChild(br);
    div.appendChild(span);
    

    
}
