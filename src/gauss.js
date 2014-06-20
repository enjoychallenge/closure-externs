/**
 * @fileoverview Externs for gauss:
 * https://github.com/wayoutmind/gauss 
 * @externs
 */

var gauss = {};

/**
 * @param {Array.<number>} array
 * @constructor 
 */
gauss.Collection = function(array) {};


/**
 * @param {Array.<number>} array
 * @constructor 
 * @extends {gauss.Collection} 
 */
gauss.Vector = function(array) {};



/**
 * @return {number}
 */
gauss.Vector.prototype.max = function() {};


/**
 * @return {number}
 */
gauss.Vector.prototype.min = function() {};


/**
 * @param {number} quantity
 * @return {Array.<number>}
 */
gauss.Vector.prototype.quantile = function(quantity) {};

