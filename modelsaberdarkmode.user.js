// ==UserScript==
// @name        ModelSaber Dark Mode
// @namespace   ModelSaber Scripts
// @match       *://modelsaber.com/*
// @grant       none
// @version     1.0.0
// @author      Assistant (toggle added by Burrito)
// @description Enables a hidden dark mode stylesheet through a simple emoji toggle button instead of through the Konami code.
// @updateURL   https://modelsaberdarkmode.burrito.software/modelsaberdarkmode.user.js
// @downloadURL https://modelsaberdarkmode.burrito.software/modelsaberdarkmode.user.js
// ==/UserScript==
console.log("Loading " + GM_info.script.name + " v" + GM_info.script.version + "...");
const toggleButton = document.createElement('a');
window.updateIndicator = function updateIndicator() {
var toggleState = localStorage.getItem("dark");
console.log("Dark mode: " + toggleState);
if(toggleState == "true") {
  toggleButton.innerHTML = '🌚 '
} else {
  toggleButton.innerHTML = '🌞 '
}
}
window.toggleDark = function toggleDark() {
  activateCheats();
  updateIndicator();
}
toggleButton.href = 'javascript:toggleDark();';
toggleButton.id = 'msdmToggleButton';
updateIndicator();
footerstart = document.getElementsByClassName("footer")[0].children[0].children[0];
footerstart.insertBefore(toggleButton, footerstart.childNodes[0]);
console.log("Loaded!")
