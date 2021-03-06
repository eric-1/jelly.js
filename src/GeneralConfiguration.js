// Generated by CoffeeScript 1.6.2
var GeneralConfiguration, Logger, Module, ReadableEntity, Tools, TreeElement, async, path, _GeneralConfiguration;

path = require('path');

async = require('async');

ReadableEntity = require('./ReadableEntity');

Tools = require('./Tools');

TreeElement = require('./TreeElement');

Logger = require('./Logger');

Module = require('./Module');

/**
 * GeneralConfiguration is a class dealing with GeneralConfiguration files
 * The main goal of this class is to provide read and process general configuration files
 * 
 * @class GeneralConfiguration
 * @extends Logger
 * @extends ReadableEntity
 * @extends TreeElement
*/


GeneralConfiguration = Tools.implementing(Logger, ReadableEntity, TreeElement, _GeneralConfiguration = (function() {
  function _GeneralConfiguration() {}

  return _GeneralConfiguration;

})(), GeneralConfiguration = (function() {
  GeneralConfiguration.prototype.GeneralConfiguration = true;

  function GeneralConfiguration() {
    this._constructor_();
  }

  GeneralConfiguration.prototype._constructor_ = function() {
    return this._parentConstructor_();
  };

  GeneralConfiguration.prototype._setDefaultContent = function(content) {
    var _ref, _ref1, _ref2, _ref3, _ref4;

    if ((_ref = content.name) == null) {
      content.name = path.basename(this.getId(), '.json');
    }
    if ((_ref1 = content.moduleConfigurationFilename) == null) {
      content.moduleConfigurationFilename = 'assets.json';
    }
    if ((_ref2 = content.plugins) == null) {
      content.plugins = [];
    }
    if ((_ref3 = content.pluginParameters) == null) {
      content.pluginParameters = {};
    }
    return (_ref4 = content.loadedModules) != null ? _ref4 : content.loadedModules = [];
  };

  /**
   * Load a general configuration from its configuration file
   * This method must be called once when loading the general configuration for the first time.
   * After this, only calls to the 'reload' method are allowed.
   *
   * @for GeneralConfiguration
   * @method loadFromFilename
   * @param {String} filename The location of the file
   * @param {Function} callback : parameters (err : error occured)
  */


  GeneralConfiguration.prototype.loadFromFilename = function(filename, cb) {
    var e, self;

    self = this;
    cb = cb || function() {};
    try {
      return this.readUpdateAndExecute(filename, 'utf8', function(err) {
        var e;

        try {
          if (err != null) {
            cb(err);
            return cb = function() {};
          } else {
            self.reload(cb);
            return cb = function() {};
          }
        } catch (_error) {
          e = _error;
          cb(e);
          return cb = function() {};
        }
      });
    } catch (_error) {
      e = _error;
      return cb(e);
    }
  };

  /**
   * Do the necessary calls to reload the general configuration (it must be loaded before calling this)
   * Currently equivalent to the readAllFiles method 
   *
   * @for GeneralConfiguration
   * @method reload
   * @param {Function} callback : parameters (err : error occured)
  */


  GeneralConfiguration.prototype.reload = function(cb) {
    return this.readAllModules(cb);
  };

  /**
   * load all the module (this method is reading all modules recursively)
   * The 'loadedModules' array on the general configuration file is used to determine the list of modules to load.
   * This method is also triggering the 'readAllFiles' method on each module
   *
   * @for GeneralConfiguration
   * @method readAllModules
   * @param {Function} callback : parameters (err : error occured)
  */


  GeneralConfiguration.prototype.readAllModules = function(cb) {
    var content, self;

    self = this;
    cb = cb || function() {};
    content = this.getLastExecutableContent();
    if (content === null) {
      cb(new Error('There is no executable content pushed on the GeneralConfiguration Class'));
      cb = function() {};
      return;
    }
    this._setDefaultContent(content);
    return async.map(content.loadedModules, function(moduleName, cb) {
      var module;

      module = self.getChildById(moduleName);
      return async.series([
        function(cb) {
          var e, jelly, moduledir;

          if (module === null) {
            try {
              module = new Module();
              module.setId(moduleName.name);
              module.setParent(self);
              jelly = self.getParent();
              if (typeof jelly === 'undefined' || jelly === null) {
                cb(new Error('There is no Jelly parent on the GeneralConfiguration object (you should call GeneralConfiguration::setParent if you are using this class manualy)'));
                cb = function() {};
                return;
              }
              moduledir = jelly.getLocalPath("app/" + moduleName.name + "/" + content.moduleConfigurationFilename);
              return self.addChild(module, function(err) {
                if (err) {
                  cb(err);
                  cb = function() {};
                  return;
                }
                return module.loadFromFilename(moduledir, function(err) {
                  return cb(err);
                });
              });
            } catch (_error) {
              e = _error;
              return cb(e);
            }
          } else {
            return cb();
          }
        }, function(cb) {
          return cb(null);
        }
      ], function(err) {
        return cb(err);
      });
    }, function(err) {
      return cb(err);
    });
  };

  return GeneralConfiguration;

})());

module.exports = GeneralConfiguration;
