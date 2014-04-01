/*globals define*/
'use strict';
define(function (require, exports, module) {
  // import dependencies
  var Engine = require('famous/core/Engine');
  var Surface = require('famous/core/Surface');
  var Modifier = require('famous/core/Modifier');
  
  // create the main context
  var mainContext = Engine.createContext();
  
  
  // your app here
  var outline = new Surface({
    size: [200, 200],
    content: '<img width="200" src="' + 'images/famous_symbol_transparent.png' + '"/>',
    properties: {
      lineHeight: '200px',
      textAlign: 'center'
    }
  });
  
  var outlineModifier = new Modifier({
    origin: [0.5, 0.5]
  });

  mainContext.add(outlineModifier).add(outline);

});
