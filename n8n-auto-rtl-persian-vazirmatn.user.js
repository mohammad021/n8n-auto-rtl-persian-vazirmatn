// ==UserScript==
// @name         n8n Auto RTL Persian + Vazirmatn (Safe)
// @namespace    https://tampermonkey.net/
// @version      1.2
// @description  RTL + Vazirmatn for Persian text in n8n (excluding code/editors)
// @author       Mohammad yamini
// @match        http://localhost:5678/*
// @match        https://*.app.n8n.cloud/*
// @grant        GM_addStyle
// ==/UserScript==

(function () {
    'use strict';

    // Load Vazirmatn font
    const font = document.createElement("link");
    font.rel = "stylesheet";
    font.href = "https://cdn.jsdelivr.net/gh/rastikerdar/vazirmatn@v33.003/Vazirmatn-font-face.css";
    document.head.appendChild(font);

    GM_addStyle(`
        .tm-persian-rtl {
            direction: rtl !important;
            text-align: right !important;
            unicode-bidi: plaintext !important;
            font-family: Vazirmatn, sans-serif !important;
        }

        /* Safety: do NOT touch editors or code areas */
        .monaco-editor,
        .monaco-mouse-cursor-text,
        textarea,
        input,
        pre,
        code,
        .cm-editor,
        .cm-content {
            direction: ltr !important;
            text-align: left !important;
            font-family: inherit !important;
        }
    `);

    const persianRegex = /[؀-ۿݐ-ݿࢠ-ࣿ]/;

    // Elements we must NEVER touch
    function isSafeZone(el) {
        if (!el) return true;

        return el.closest(
            '.monaco-editor, .cm-editor, textarea, input, pre, code, [contenteditable="true"]'
        );
    }

    function applyRTL(root = document) {

        const walker = document.createTreeWalker(
            root,
            NodeFilter.SHOW_TEXT
        );

        while (walker.nextNode()) {

            const textNode = walker.currentNode;

            if (!textNode.nodeValue) continue;
            if (!persianRegex.test(textNode.nodeValue)) continue;

            const el = textNode.parentElement;
            if (!el) continue;

            // skip code / editors
            if (isSafeZone(el)) continue;

            if (!el.classList.contains("tm-persian-rtl")) {
                el.classList.add("tm-persian-rtl");
            }
        }
    }

    applyRTL();

    const observer = new MutationObserver((mutations) => {
        for (const mutation of mutations) {
            mutation.addedNodes.forEach(node => {
                if (node.nodeType === 1) {
                    applyRTL(node);
                }
            });
        }
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true
    });

})();