// Libraries
const Store = require('electron-store');
const editJsonFile = require("edit-json-file");
var os = require('os');

// Config File
var dir = os.userInfo().homedir
let file = editJsonFile(`${userpath}/config.json`);
var webhookURl = file.get("webhook");
document.getElementById('webhook').value = webhookURl;

//button 
const webSaveBtn = document.getElementById('web')



const mainstore = new Store();
webSaveBtn.onclick = function () {
    console.log(document.getElementById('webhook').value)
    mainstore.set('webhook', document.getElementById('webhook').value);
    console.log(mainstore.get('webhook'));
}
