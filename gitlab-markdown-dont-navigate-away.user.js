// ==UserScript==
// @name         Gitlab Markdown Don't Navigate Away
// @namespace    https://gitlab.com/southgate/userscripts/gitlab-markdown-dont-navigate-away/raw/master/gitlab-markdown-dont-navigate-away.user.js
// @updateURL    https://gitlab.com/southgate/userscripts/gitlab-markdown-dont-navigate-away/raw/master/gitlab-markdown-dont-navigate-away.user.js
// @downloadURL  https://gitlab.com/southgate/userscripts/gitlab-markdown-dont-navigate-away/raw/master/gitlab-markdown-dont-navigate-away.user.js
// @version      0.0.1
// @description  Don't navigate away when editing gitlab markdown. Saves loss of work!
// @author       David Southgate
// @match        https://gitlab.com/*/edit/*.md
// @require      https://code.jquery.com/jquery-3.3.1.min.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    window.onbeforeunload = function() {
        return 'You have unsaved changes!';
    }
})();