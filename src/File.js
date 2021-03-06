// Generated by CoffeeScript 1.6.2
var File, Logger, ReadableEntity, Tools, TreeElement, async, _File;

async = require('async');

Tools = require('./Tools');

Logger = require('./Logger');

ReadableEntity = require('./ReadableEntity');

TreeElement = require('./TreeElement');

File = require('./File');

/**
 * File is a class dealing with Module files.
 * Each file is suppose to be under its module folder on the projet.
 * The list of files for each module is defined on the module configuration file (on the fileList entry).
 * Example : on a 'menu' module, 'menu-animations.coffee' and 'menu-design.css' can both be represented with a File class. 
 * 
 * @class File
 * @extends Logger
 * @extends ReadableEntity
 * @extends TreeElement
*/


File = Tools.implementing(Logger, ReadableEntity, TreeElement, _File = (function() {
  function _File() {}

  return _File;

})(), File = (function() {
  File.prototype.File = true;

  function File() {
    this._constructor_();
  }

  File.prototype._constructor_ = function() {
    return this._parentConstructor_();
  };

  File.prototype.loadFromFilename = function(filename, cb) {
    return cb();
  };

  return File;

})());

module.exports = File;
