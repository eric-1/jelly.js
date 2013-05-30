// Generated by CoffeeScript 1.6.2
var Logger, WinstonLoggerWrapper, winston,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

winston = require('winston');

WinstonLoggerWrapper = (function() {
  function WinstonLoggerWrapper() {
    this._logger = new winston.Logger();
  }

  WinstonLoggerWrapper.prototype.LoggerWrapper = true;

  WinstonLoggerWrapper.prototype.info = function(s) {
    return this._logger.info(s);
  };

  WinstonLoggerWrapper.prototype.log = function(type, s) {
    return this._logger.log(type, s);
  };

  WinstonLoggerWrapper.prototype.error = function(s) {
    return this._logger.error(s);
  };

  WinstonLoggerWrapper.prototype.warn = function(s) {
    return this._logger.warn(s);
  };

  WinstonLoggerWrapper.prototype.addFile = function(filepath) {
    return this._logger.add(winston.transports.File, {
      filename: filepath,
      handleExceptions: true
    });
  };

  return WinstonLoggerWrapper;

})();

/**
 * The logger class is providing a small interface to add logging capabilites to a given class
 * 
 * @class Logger
*/


Logger = (function(_super) {
  __extends(Logger, _super);

  function Logger() {}

  Logger.prototype.Logger = true;

  return Logger;

})(WinstonLoggerWrapper);

module.exports = Logger;