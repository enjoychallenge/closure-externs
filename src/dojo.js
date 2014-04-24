/**
 * @fileoverview Externs for the Dojo.
 * @externs
 */

var dojo = {};

/**
 * @param {Function} obj
 */
dojo.addOnLoad = function( obj ) {};

/**
 * @param {Object} obj
 * @param {string} event
 * @param {(Object|string|Function)} context
 * @param {(string|Function)=} opt_method
 * @param {boolean=} opt_dontFix
 */
dojo.connect = function( obj, event, context, opt_method, opt_dontFix ) {};

/**
 * @param {string} name
 */
dojo.require = function( name ) {};

/**
 * @param {string|Array.<number>|Object|dojo.Color} color
 * @constructor
 */
dojo.Color = function( color ) {};

