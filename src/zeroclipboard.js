/**
 * @fileoverview Externs for Zero Clipboard.
 * https://github.com/jonrohan/ZeroClipboard
 * @externs
 */

var ZeroClipboard = {};

/**
 * @param {string} url
 */
ZeroClipboard.setMoviePath = function(url) {};

/**
 * @constructor
 */
ZeroClipboard.Client = function() {};

/**
 * @param {string} text text to copy.
 */
ZeroClipboard.Client.prototype.setText = function(text) {};

/**
 * @param {string} id element id.
 * @param {string=} opt_containerId container element id.
 */
ZeroClipboard.Client.prototype.glue = function(id, opt_containerId) {};

/**
 * @param {string} event event name.
 * @param {Function} func function to handle event.
 */
ZeroClipboard.Client.prototype.addEventListener = function(event, func) {};
