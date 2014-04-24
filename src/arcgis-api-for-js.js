/**
 * @fileoverview Externs for the ESRI ArcGIS.
 * @externs
 */

var esri = {};

/**
 * @param {Object} options
 * @constructor
 */
esri.Graphic = function( options ) {};

/**
 * @type {Object}
 */
esri.Graphic.prototype.attributes;

/**
 * @param {esri.symbol.Symbol} symbol
 */
esri.Graphic.prototype.setSymbol = function( symbol ) {};

/**
 * @param {string} divId
 * @param {Object=} opt_options
 * @constructor
 */
esri.Map = function( divId, opt_options ) {};

/**
 * @type {esri.SpatialReference}
 */
esri.Map.prototype.spatialReference;

/**
 * @param {esri.layers.Layer} layer
 * @param {number=} opt_index
 */
esri.Map.prototype.addLayer = function( layer, opt_index ) {};

/**
 * @param {Object|number|string} spref
 * @constructor
 */
esri.SpatialReference = function(spref) {};

esri.geometry = {};

/**
 * @param {Object} options
 * @constructor
 * @extends {esri.geometry.Geometry}
 */
esri.geometry.Extent = function(options) {};

/**
 * @type {number}
 */
esri.geometry.Extent.prototype.xmax;

/**
 * @type {number}
 */
esri.geometry.Extent.prototype.xmin;

/**
 * @type {number}
 */
esri.geometry.Extent.prototype.ymax;

/**
 * @type {number}
 */
esri.geometry.Extent.prototype.ymin;

/**
 * @constructor
 */
esri.geometry.Geometry = function() {};

/**
 * @param {number} x
 * @param {number} y
 * @param {esri.SpatialReference} spatialReference
 * @constructor
 * @extends {esri.geometry.Geometry}
 */
esri.geometry.Point = function(x, y, spatialReference) {};

/**
 * @param {esri.SpatialReference} spatialReference
 * @constructor
 * @extends {esri.geometry.Geometry}
 */
esri.geometry.Polygon = function(spatialReference) {};

/**
 * @param {Array.<Array.<number>>} coords
 * @return {esri.geometry.Polygon}
 */
esri.geometry.Polygon.prototype.addRing = function( coords ) {};

esri.layers = {};

/**
 * @param {string} url
 * @param {Object=} opt_options
 * @constructor
 * @extends {esri.layers.DynamicMapServiceLayer}
 */
esri.layers.ArcGISDynamicMapServiceLayer = function(url, opt_options) {};


/**
 * @param {Array.<string>} layerDefinitions
 * @param {boolean=} opt_doNotRefresh
 */
esri.layers.ArcGISDynamicMapServiceLayer.prototype.setLayerDefinitions = function( layerDefinitions, opt_doNotRefresh ) {};

/**
 * @param {string} url
 * @param {Object=} opt_options
 * @constructor
 * @extends {esri.layers.TiledMapServiceLayer}
 */
esri.layers.ArcGISTiledMapServiceLayer = function(url, opt_options) {};

/**
 * @constructor
 * @extends {esri.layers.Layer}
 */
esri.layers.DynamicMapServiceLayer = function() {};

/**
 * @param {string} url
 * @param {Object=} opt_options
 * @constructor
 * @extends {esri.layers.GraphicsLayer}
 */
esri.layers.FeatureLayer = function(url, opt_options) {};

/**
 * @type {*}
 */
esri.layers.FeatureLayer.MODE_ONDEMAND;

/**
 * @type {esri.renderer.Renderer}
 */
esri.layers.FeatureLayer.prototype.renderer;

esri.layers.FeatureLayer.prototype.refresh = function(expression) {};

/**
 * @param {string} expression
 * @return {esri.layers.FeatureLayer}
 */
esri.layers.FeatureLayer.prototype.setDefinitionExpression = function(expression) {};

/**
 * @param {esri.renderer.Renderer} renderer
 */
esri.layers.FeatureLayer.prototype.setRenderer = function(renderer) {};

/**
 * @param {Object=} opt_options
 * @constructor
 * @extends {esri.layers.Layer}
 */
esri.layers.GraphicsLayer = function(opt_options) {};

/**
 * @param {esri.Graphic} graphic
 */
esri.layers.GraphicsLayer.prototype.add = function(graphic) {};

esri.layers.GraphicsLayer.prototype.clear = function() {};

/**
 * @param {Object=} opt_options
 * @constructor
 */
esri.layers.Layer = function(opt_options) {};

/**
 * @constructor
 */
esri.layers.LOD = function() {};

/**
 * @type {number}
 */
esri.layers.LOD.prototype.scale;

/**
 * @constructor
 * @extends {esri.layers.Layer}
 */
esri.layers.TiledMapServiceLayer = function() {};

esri.renderer = {};

/**
 * @constructor
 */
esri.renderer.Renderer = function() {};

/**
 * @param {esri.symbol.Symbol} defaultSymbol
 * @param {string} attributeField
 * @constructor
 * @extends {esri.renderer.Renderer}
 */
esri.renderer.UniqueValueRenderer = function(defaultSymbol, attributeField) {};

/**
 * @param {string} value
 * @param {esri.symbol.Symbol} symbol
 */
esri.renderer.UniqueValueRenderer.prototype.addValue = function(value, symbol) {};

esri.symbol = {};

/**
 * @constructor
 */
esri.symbol.Symbol = function() {};

/**
 * @constructor
 * @extends {esri.symbol.Symbol}
 */
esri.symbol.FillSymbol = function() {};

/**
 * @constructor
 * @extends {esri.symbol.Symbol}
 */
esri.symbol.LineSymbol = function() {};

/**
 * @param {string=} opt_style
 * @param {esri.symbol.SimpleLineSymbol=} opt_outline
 * @param {dojo.Color=} opt_color
 * @constructor
 * @extends {esri.symbol.FillSymbol}
 */
esri.symbol.SimpleFillSymbol = function(opt_style, opt_outline, opt_color) {};

/**
 * @type {string}
 */
esri.symbol.SimpleFillSymbol.STYLE_NULL;

/**
 * @type {string}
 */
esri.symbol.SimpleFillSymbol.STYLE_SOLID;

/**
 * @type {esri.symbol.SimpleLineSymbol}
 */
esri.symbol.SimpleFillSymbol.prototype.outline;

/**
 * @param {dojo.Color} color
 * @return {esri.symbol.Symbol}
 */
esri.symbol.SimpleFillSymbol.prototype.setColor = function(color) {};

/**
 * @param {string} style
 * @return {esri.symbol.SimpleFillSymbol}
 */
esri.symbol.SimpleFillSymbol.prototype.setStyle = function(style) {};

/**
 * @constructor
 * @param {string} opt_style
 * @param {dojo.Color} opt_color
 * @param {number} opt_width
 * @extends {esri.symbol.LineSymbol}
 */
esri.symbol.SimpleLineSymbol = function(opt_style, opt_color, opt_width) {};

/**
 * @type {string}
 */
esri.symbol.SimpleLineSymbol.STYLE_NULL;

/**
 * @type {string}
 */
esri.symbol.SimpleLineSymbol.STYLE_SOLID;

/**
 * @param {string} style
 * @return {esri.symbol.SimpleLineSymbol}
 */
esri.symbol.SimpleLineSymbol.prototype.setStyle = function(style) {};

esri.tasks = {};

/**
 * @constructor
 */
esri.tasks.FeatureSet = function() {};

/**
 * @type {Array.<esri.Graphic>}
 */
esri.tasks.FeatureSet.prototype.features;

/**
 * @constructor
 */
esri.tasks.Query = function() {};

/**
 * @type {esri.geometry.Geometry}
 */
esri.tasks.Query.prototype.geometry;

/**
 * @type {Array.<string>}
 */
esri.tasks.Query.prototype.outFields;

/**
 * @type {boolean}
 */
esri.tasks.Query.prototype.returnGeometry;

/**
 * @type {string}
 */
esri.tasks.Query.prototype.spatialRelationship;

/**
 * @type {string}
 */
esri.tasks.Query.prototype.where;

/**
 * @constructor
 * @param {string} url
 */
esri.tasks.QueryTask = function(url) {};

/**
 * @param {esri.tasks.Query} parameters
 * @param {Function=} opt_callback
 * @param {Function=} opt_errback
 * @return {esri.symbol.SimpleFillSymbol}
 */
esri.tasks.QueryTask.prototype.execute = function(parameters, opt_callback, opt_errback) {};
