// Generated by CoffeeScript 1.6.2
var GeneralConfiguration, Jelly, Logger,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

GeneralConfiguration = require('./GeneralConfiguration');

Logger = require('./Logger');

/**
 * Jelly is the main class of the framework
 * 
 * @class Jelly
*/


Jelly = (function(_super) {
  __extends(Jelly, _super);

  function Jelly() {
    this.getLogger().info('Jelly: Creating a new instance.');
    this._rootDirectory = __dirname;
  }

  /**
   * Returns the current root directory
   * Should return __dirname if nothing is set.
   *
   * @for Jelly
   * @method getRootDirectory
   * @return {String} Root directory
  */


  Jelly.prototype.getRootDirectory = function() {
    return this._rootDirectory;
  };

  /**
   * Sets the current root directory
   *
   * @for Jelly
   * @method setRootDirectory
   * @return {String} Root directory
  */


  Jelly.prototype.setRootDirectory = function(dir) {
    this.getLogger().info("Jelly: the root directory is now set to " + dir);
    return this._rootDirectory = dir;
  };

  Jelly.prototype.readAllGeneralConfigurationFiles = function() {};

  return Jelly;

})(Logger);

module.exports = Jelly;