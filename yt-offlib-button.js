// ==UserScript==
// @name       Youtube Offliberate Button
// @namespace  http://abs.ezw.me
// @icon       http://offliberty.com/favicon.ico
// @version    1.1
// @description  Places an "Offliberate" button next to the subscribe button under YouTube videos. The button redirects you to Offliberty.com, where the conversion is started automatically. Based on "Youtube MP3 Download Button" by Soulweaver.
// @match         http*://www.youtube.com/*
// @require       http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js
// @copyright  2014+, ABS
// ==/UserScript==

/* Version history:
1.1: - Changed favicon location to avert unsecure resource warning when connecting through HTTPS
1.0: - Initial release
*/

        var linkPath ='http://offliberty.com/#'+encodeURIComponent(document.URL);
        $(  '<a id="youtube2mp3" class="yt-uix-button yt-uix-button-default" target="_blank" href="'+linkPath+'" style="margin-left: 8px; height: 24px; padding: 0 4px; /* background-color: #e62117; */"><img src="https://static.e-junkie.com/sslpic/135251.c4bbae813bfe32b25ff9d428953b7e3f.gif" style="vertical-align:middle;color: white;"> <span class="yt-uix-button-content" style="line-height: 21px; /* font-variant: small-caps; */ font-size: 11px; /* color: #fefefe; */">Offliberate</span></a>').insertAfter( "#watch7-subscription-container" );   
