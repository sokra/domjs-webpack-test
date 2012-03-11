require("webpack/require-polyfill")(require); // For node.js useage

var domjs = require('domjs/lib/html5')(document, require.context("./templates"));

var mydom = domjs.build("./example");

document.body.appendChild(mydom);