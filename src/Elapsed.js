(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define(factory);
    } else if (typeof exports === 'object') {
        module.exports = factory();
    } else {
        root.Elapsed = factory();
  }
}(this, function () {

  function Elapsed() {
    if (!(this instanceof Elapsed)) return new Elapsed;

    this.timers = {};
  }

  Elapsed.prototype.start = function(key) {
    this.timers[key] = Date.now();
  };

  Elapsed.prototype.elapsed = function(key) {
    if (!this.timers[key]) throw new Error('This timer does not exist!');

    return Date.now() - this.timers[key];
  };

  return Elapsed;
}));
