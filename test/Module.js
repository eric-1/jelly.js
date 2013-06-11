// Generated by CoffeeScript 1.6.2
var GeneralConfiguration, Jelly, assert, async, path, toType;

assert = require('chai').assert;

async = require('async');

path = require('path');

toType = function(obj) {
  return {}.toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
};

Jelly = require('../src/Jelly');

GeneralConfiguration = require('../src/GeneralConfiguration');

describe('Module', function() {
  var Module;

  Module = require('../src/Module');
  it('Should be a Module', function() {
    return assert.equal(Module.prototype.Module, true);
  });
  describe('_constructor_', function() {
    return it('Should have a _constructor_', function() {
      return assert.typeOf(Module.prototype._constructor_, 'function');
    });
  });
  describe('#constructor', function() {
    it('creating a Module instance should not throw errors', function() {
      var m;

      return m = new Module();
    });
    it('Should extends from a Logger', function() {
      return assert.equal(Module.prototype.Logger, true);
    });
    it('Should extends from a ReadableEntity', function() {
      return assert.equal(Module.prototype.ReadableEntity, true);
    });
    return it('Should extends from a TreeElement', function() {
      return assert.equal(Module.prototype.TreeElement, true);
    });
  });
  describe('#loadFromFilename', function() {
    it('Should be a callable function', function() {
      return assert.typeOf(Module.prototype.loadFromFilename, 'function');
    });
    it('Should return an error if the filename does not exist', function(cb) {
      var m;

      m = new Module();
      return m.loadFromFilename('/do/not/exist/', function(err) {
        var e;

        try {
          assert.equal(toType(err), 'error');
          return cb();
        } catch (_error) {
          e = _error;
          return cb(e);
        }
      });
    });
    return it('Should set some default content on the module config file', function(cb) {
      var m;

      m = new Module();
      return m.loadFromFilename("" + __dirname + "/testFiles/empty.json", function(err) {
        var content, e;

        try {
          if (err != null) {
            cb(e);
            cb = function() {};
            return;
          }
          content = m.getLastExecutableContent();
          assert.typeOf(content, 'object');
          assert.typeOf(content.fileList, 'array');
          assert.typeOf(content.pathList, 'array');
          assert.typeOf(content.plugins, 'array');
          assert.typeOf(content.pluginParameters, 'object');
          assert.typeOf(content.modulePlugins, 'array');
          assert.typeOf(content.modulePluginParameters, 'object');
          assert.equal(content.fileList.length, 0);
          assert.equal(content.pathList.length, 0);
          assert.equal(content.plugins.length, 0);
          assert.equal(JSON.stringify(content.pluginParameters), '{}');
          assert.equal(content.modulePlugins.length, 0);
          assert.equal(JSON.stringify(content.modulePluginParameters), '{}');
          return cb();
        } catch (_error) {
          e = _error;
          return cb(e);
        }
      });
    });
  });
  return describe('#reload', function() {
    it('Should be a callable function', function() {
      return assert.typeOf(Module.prototype.reload, 'function');
    });
    it('Should send an error when there is no content loaded', function(cb) {
      var m;

      m = new Module();
      return m.reload(function(err) {
        assert.equal(toType(err), 'error');
        return cb();
      });
    });
    return it('Should reload the content', function() {
      var m;

      m = new Module();
      return m.loadFromFilename("" + __dirname + "/testFiles/empty.json", function(err) {
        var e;

        try {
          assert.equal(err, null);
          m.updateContent({
            filename: "" + __dirname + "/testFiles/dummyFile.json",
            content: {
              _test: true
            },
            extension: '__exec'
          });
          return m.reload(function(err) {
            var content;

            content = m.getLastExecutableContent();
            assert.equal(content._test, true);
            return assert.typeOf(content.plugins, 'array');
          });
        } catch (_error) {
          e = _error;
          return cb(e);
        }
      });
    });
  });
});
