// ==UserScript==
// @name         Nitro Type Garage Hack 2020
// @namespace    https://theprabhakar.in/
// @version      1.0
// @description  Garage Mod for adding cars - only visual
// @author       Prabhakar Rai
// @match        https://www.nitrotype.com/garage
// @icon         https://raw.githubusercontent.com/PrabhakarRai/Nitro-type-car-hack/master/icon.jpg
// @updateURL    https://raw.githubusercontent.com/PrabhakarRai/Nitro-type-car-hack/master/newGarage.user.js
// @downloadURL  https://raw.githubusercontent.com/PrabhakarRai/Nitro-type-car-hack/master/newGarage.user.js
// @require      https://raw.githubusercontent.com/PrabhakarRai/Nitro-type-car-hack/master/data.js
// @grant unsafeWindow
// @grant GM_addStyle
// @grant GM_getValue
// @grant GM_setValue
// @grant GM_xmlhttpRequest
// @grant GM_xmlhttpRequest
// @grant GM_registerMenuCommand
// @grant GM_deleteValue
// @grant GM_listValues
// @grant GM_getResourceText
// @grant GM_getResourceURL
// @grant GM_log
// @grant GM_openInTab
// @grant GM_setClipboard
// @grant GM_info
// @grant GM_getMetadata
// ==/UserScript==


window.onload = function() {
    var needed_cars = [168, 183, 163, 118, 173, 169, 106, 47, 94, 68, 98, 164, 160, 198, 133, 104, 92, 49, 202, 201, 197, 196, 174, 138, 188, 192, 175, 176, 177];
    /*****************************************
    *In order to change or rearrange the cars,
    *use the hack_ID of the needed car in above,
    *given variable. hack_ID is available on my,
    *blog. www.theprabhakar.in****************/
    hackcars(needed_cars);
}

/*Credit: Ginfio from youtube*/
