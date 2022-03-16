// ==UserScript==
// @name         钉钉闪记修改视频宽度
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  钉钉闪记修改视频宽度
// @author       Curtis
// @match        https://shanji.dingtalk.com/app/transcribes/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=dingtalk.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    function fix(){
        try{
            document.getElementsByClassName("H\+NzRG97")[0].style.width='60vw';
            document.getElementsByTagName('video')[0].style.height='630px';
        }catch (e) {
            console.log(e);
            setTimeout(function(){fix()},1000);
        }
    }
    fix();
    // Your code here...
})();