// ==UserScript==
// @name         91Porn Video Address Extractor
// @namespace    http://github.com/DuckSoft/
// @version      0.1
// @description  Double-click to get the address!
// @author       DuckSoft
// @match        *://91porn.com/view_video.php?*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    document.addEventListener('dblclick', () => {
        let sources = document.getElementsByTagName("source");
        if (!sources) alert("No video source found");
        else window.location = sources[0].src;
    });
})();