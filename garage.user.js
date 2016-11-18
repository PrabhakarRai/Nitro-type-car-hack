// ==UserScript==
// @name         Nitro Type Car Hack_garage
// @namespace    http://theprabhakar.in/
// @version      1.1
// @description  Change cars on Nitrotype.com
// @author       Prabhakar Rai
// @match        https://www.nitrotype.com/garage
// @updateURL    https://raw.githubusercontent.com/PrabhakarRai/Nitro-type-car-hack/master/garage.user.js
// @downloadURL  https://raw.githubusercontent.com/PrabhakarRai/Nitro-type-car-hack/master/garage.user.js
// @icon https://raw.githubusercontent.com/PrabhakarRai/Nitro-type-car-hack/master/icon.jpg
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

(function() {
    'use strict';
    function mainImgReplace() {
        var x = document.getElementsByClassName('car player-car')[0]; 
        var img = x.getElementsByTagName('img')[0];
        if(img.getAttribute('src') != "/cars/130_large_1.png" && img.getAttribute('src') != "/cars/40_large_1.png" && img.getAttribute('src') != "/cars/28_large_1.png" && img.getAttribute('src') != "/cars/54_large_1.png" &&    img.getAttribute('src') != "/cars/79_large_1.png" && img.getAttribute('src') != "/cars/4_large_1.png" &&    img.getAttribute('src') != "/cars/23_large_1.png" && img.getAttribute('src') != "/cars/78_large_1.png" &&    img.getAttribute('src') != "/cars/62_large_1.png" && img.getAttribute('src') != "/cars/106_large_1.png" &&    img.getAttribute('src') != "/cars/1_large_1.png" && img.getAttribute('src') != "/cars/13_large_1.png" &&    img.getAttribute('src') != "/cars/117_large_1.png" && img.getAttribute('src') != "/cars/66_large_1.png" &&    img.getAttribute('src') != "/cars/12_large_1.png" && img.getAttribute('src') != "/cars/24_large_1.png" &&    img.getAttribute('src') != "/cars/32_large_1.png" && img.getAttribute('src') != "/cars/37_large_1.png" &&    img.getAttribute('src') != "/cars/41_large_1.png" && img.getAttribute('src') != "/cars/50_large_1.png" &&    img.getAttribute('src') != "/cars/69_large_1.png" && img.getAttribute('src') != "/cars/70_large_1.png" &&    img.getAttribute('src') != "/cars/71_large_1.png" && img.getAttribute('src') != "/cars/72_large_1.png" &&    img.getAttribute('src') != "/cars/77_large_1.png" && img.getAttribute('src') != "/cars/79_large_1.png" &&    img.getAttribute('src') != "/cars/81_large_1.png" && img.getAttribute('src') != "/cars/82_large_1.png" &&    img.getAttribute('src') != "/cars/83_large_1.png" && img.getAttribute('src') != "/cars/84_large_1.png" &&    img.getAttribute('src') != "/cars/85_large_1.png" && img.getAttribute('src') != "/cars/86_large_1.png" &&    img.getAttribute('src') != "/cars/87_large_1.png" && img.getAttribute('src') != "/cars/88_large_1.png" &&    img.getAttribute('src') != "/cars/92_large_1.png"&& img.getAttribute('src') != "/cars/97_large_1.png" &&    img.getAttribute('src') != "/cars/98_large_1.png" && img.getAttribute('src') != "/cars/99_large_1.png" &&    img.getAttribute('src') != "/cars/100_large_1.png" && img.getAttribute('src') != "/cars/101_large_1.png" &&    img.getAttribute('src') != "/cars/102_large_1.png" && img.getAttribute('src') != "/cars/103_large_1.png" &&    img.getAttribute('src') != "/cars/104_large_1.png" && img.getAttribute('src') != "/cars/105_large_1.png" &&    img.getAttribute('src') != "/cars/118_large_1.png" && img.getAttribute('src') != "/cars/107_large_1.png" &&    img.getAttribute('src') != "/cars/108_large_1.png" && img.getAttribute('src') != "/cars/109_large_1.png" &&    img.getAttribute('src') != "/cars/110_large_1.png" && img.getAttribute('src') != "/cars/111_large_1.png" &&    img.getAttribute('src') != "/cars/112_large_1.png" && img.getAttribute('src') != "/cars/113_large_1.png" &&    img.getAttribute('src') != "/cars/114_large_1.png" && img.getAttribute('src') != "/cars/115_large_1.png" &&    img.getAttribute('src') != "/cars/116_large_1.png" && img.getAttribute('src') != "/cars/119_large_1.png" &&    img.getAttribute('src') != "/cars/120_large_1.png" && img.getAttribute('src') != "/cars/121_large_1.png" &&    img.getAttribute('src') != "/cars/122_large_1.png" && img.getAttribute('src') != "/cars/123_large_1.png" &&    img.getAttribute('src') != "/cars/124_large_1.png" ){
            img.src = img.src.replace(/(_)(\d)/, "$12");
        }
    }
    function replaceImg(){
        for(var i=1; i < all.length ; i++){
            checkId = all[i].getAttribute("data-id");
            if(checkId === ""){
                continue;
            }
            else if(checkId == 40 || checkId == 28 || checkId == 79 || checkId == 4 || checkId == 23 || checkId == 78 || checkId == 62 || checkId == 106 || checkId == 1 || checkId == 13 || checkId == 117 || checkId == 66 || checkId == 12 || checkId == 24 || checkId == 32 || checkId == 37 || checkId == 41 || checkId == 50 || checkId == 69 || checkId == 70 || checkId == 71 || checkId == 72 || checkId == 2877 || checkId == 79 || checkId == 81 || checkId == 82 || checkId == 83 || checkId == 84 || checkId == 85 || checkId == 86 || checkId == 87 || checkId == 88 || checkId == 92 || checkId >=97){
                continue;
            }

            newStyle = all[i].childNodes[3].getAttribute('style').replace(/(_)(\d)/, "$12");
            all[i].childNodes[3].setAttribute('style', newStyle);}

    }
    var checkingStuff = document.getElementsByClassName('name')[0];
    if (checkingStuff.innerText != "Guest Racer"){

        var newStyle;
        var checkId;
        var all = document.getElementsByClassName('car');


        console.log(replaceImg());


        console.log(mainImgReplace());
        var support = [
            '<p class="main-links"><a href="https://www.youtube.com/channel/UC4KqtdIrZucElkUUgma-79w?sub_confirmation=1" style="font-size: 120%" target="_blank">This Garage is Designed By Prabhakar Rai. Support By Subscribing on Youtube!</a></p>'
        ].join('');
        var spot0 = [
            '<div class="spot" data-id="0">',
            '	<div class="car" data-id="104" data-angle="">',
            '		<div class="car-name"><span>Corndog"s car</span></div>',
            '		<div class="image" style="background-image: url("/cars/104_small_1.png"); ")"></div>',
            '	<a href="#" class="sell-button">Sell »</a>',
            '	</div>',
            '</div>'
        ].join('');
        var spot1 = [
            '<div class="spot" data-id="1">',
            '	<div class="car" data-id="124" data-angle="">',
            '		<div class="car-name"><span>Mercedex McLaro SLR</span></div>',
            '		<div class="image" style="background-image: url("/cars/124_small_1.png"); ")"></div>',
            '	<a href="#" class="sell-button">Sell »</a>',
            '	</div>',
            '</div>'
        ].join('');

        var firstStep = document.getElementsByClassName('spot empty')[0];
        var secondStep = firstStep.childNodes[1];
        secondStep.childNodes[3].setAttribute("style", "background-image: url(\"/cars/129_small_1.png\");");
        secondStep.childNodes[1].innerHTML = "<span>Mercedex McLaro SLR 12.5</span>";
        secondStep.setAttribute('data-id', '129');
        firstStep.setAttribute('class', 'spot');

        firstStep = document.getElementsByClassName('spot empty')[0];
        secondStep = firstStep.childNodes[1];
        secondStep.childNodes[3].setAttribute("style", "background-image: url(\"/cars/95_small_1.png\");");
        secondStep.childNodes[1].innerHTML = "<span>Police Bimmer</span>";
        secondStep.setAttribute('data-id', '95');
        firstStep.setAttribute('class', 'spot');

        firstStep = document.getElementsByClassName('spot empty')[0];
        secondStep = firstStep.childNodes[1];
        secondStep.childNodes[3].setAttribute("style", "background-image: url(\"/cars/107_small_1.png\");");
        secondStep.childNodes[1].innerHTML = "<span>Lacan Hypersport</span>";
        secondStep.setAttribute('data-id', '107');
        firstStep.setAttribute('class', 'spot');

        firstStep = document.getElementsByClassName('spot empty')[0];
        secondStep = firstStep.childNodes[1];
        secondStep.childNodes[3].setAttribute("style", "background-image: url(\"/cars/105_small_1.png\");");
        secondStep.childNodes[1].innerHTML = "<span>14 Mantaray</span>";
        secondStep.setAttribute('data-id', '105');
        firstStep.setAttribute('class', 'spot');

        firstStep = document.getElementsByClassName('spot empty')[0];
        secondStep = firstStep.childNodes[1];
        secondStep.childNodes[3].setAttribute("style", "background-image: url(\"/cars/89_small_1.png\");");
        secondStep.childNodes[1].innerHTML = "<span>Wach 6</span>";
        secondStep.setAttribute('data-id', '89');
        firstStep.setAttribute('class', 'spot');

        firstStep = document.getElementsByClassName('spot empty')[0];
        secondStep = firstStep.childNodes[1];
        secondStep.childNodes[3].setAttribute("style", "background-image: url(\"/cars/77_small_1.png\");");
        secondStep.childNodes[1].innerHTML = "<span>The Pirc</span>";
        secondStep.setAttribute('data-id', '77');
        firstStep.setAttribute('class', 'spot');

        firstStep = document.getElementsByClassName('spot empty')[0];
        secondStep = firstStep.childNodes[1];
        secondStep.childNodes[3].setAttribute("style", "background-image: url(\"/cars/68_small_1.png\");");
        secondStep.childNodes[1].innerHTML = "<span>F4U Corsair</span>";
        secondStep.setAttribute('data-id', '68');
        firstStep.setAttribute('class', 'spot');

        firstStep = document.getElementsByClassName('spot empty')[0];
        secondStep = firstStep.childNodes[1];
        secondStep.childNodes[3].setAttribute("style", "background-image: url(\"/cars/104_small_1.png\");");
        secondStep.childNodes[1].innerHTML = "<span>Corndog's car</span>";
        secondStep.setAttribute('data-id', '104');
        firstStep.setAttribute('class', 'spot');



        firstStep = document.getElementsByClassName('spot empty')[0];
        secondStep = firstStep.childNodes[1];
        secondStep.childNodes[3].setAttribute("style", "background-image: url(\"/cars/98_small_1.png\");");
        secondStep.childNodes[1].innerHTML = "<span>Pumpkin Hauler</span>";
        secondStep.setAttribute('data-id', '98');
        firstStep.setAttribute('class', 'spot');

        firstStep = document.getElementsByClassName('spot empty')[0];
        secondStep = firstStep.childNodes[1];
        secondStep.childNodes[3].setAttribute("style", "background-image: url(\"/cars/110_small_1.png\");");
        secondStep.childNodes[1].innerHTML = "<span>Hammer Wheels</span>";
        secondStep.setAttribute('data-id', '110');
        firstStep.setAttribute('class', 'spot');

        firstStep = document.getElementsByClassName('spot empty')[0];
        secondStep = firstStep.childNodes[1];
        secondStep.childNodes[3].setAttribute("style", "background-image: url(\"/cars/57_small_1.png\");");
        secondStep.childNodes[1].innerHTML = "<span>Hotdog Mobile</span>";
        secondStep.setAttribute('data-id', '57');
        firstStep.setAttribute('class', 'spot');

        firstStep = document.getElementsByClassName('spot empty')[0];
        secondStep = firstStep.childNodes[1];
        secondStep.childNodes[3].setAttribute("style", "background-image: url(\"/cars/50_small_1.png\");");
        secondStep.childNodes[1].innerHTML = "<span>8 Bit Racer</span>";
        secondStep.setAttribute('data-id', '50');
        firstStep.setAttribute('class', 'spot');

        firstStep = document.getElementsByClassName('spot empty')[0];
        secondStep = firstStep.childNodes[1];
        secondStep.childNodes[3].setAttribute("style", "background-image: url(\"/cars/97_small_1.png\");");
        secondStep.childNodes[1].innerHTML = "<span>Wampus</span>";
        secondStep.setAttribute('data-id', '97');
        firstStep.setAttribute('class', 'spot');

        firstStep = document.getElementsByClassName('spot empty')[0];
        secondStep = firstStep.childNodes[1];
        secondStep.childNodes[3].setAttribute("style", "background-image: url(\"/cars/93_small_1.png\");");
        secondStep.childNodes[1].innerHTML = "<span>MSG 01</span>";
        secondStep.setAttribute('data-id', '93');
        firstStep.setAttribute('class', 'spot');

        firstStep = document.getElementsByClassName('spot empty')[0];
        secondStep = firstStep.childNodes[1];
        secondStep.childNodes[3].setAttribute("style", "background-image: url(\"/cars/94_small_1.png\");");
        secondStep.childNodes[1].innerHTML = "<span>Fort Stallion</span>";
        secondStep.setAttribute('data-id', '94');
        firstStep.setAttribute('class', 'spot');
        
        firstStep = document.getElementsByClassName('spot empty')[0];
        secondStep = firstStep.childNodes[1];
        secondStep.childNodes[3].setAttribute("style", "background-image: url(\"/cars/122_small_1.png\");");
        secondStep.childNodes[1].innerHTML = "<span>Holiday Hero</span>";
        secondStep.setAttribute('data-id', '122');
        firstStep.setAttribute('class', 'spot');
        
        document.getElementsByClassName('main-links')[0].innerHTML = support;
    }
})();
