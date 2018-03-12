function Just(value) {
  this.value = value;
}

Just.prototype.bind = function(transform) {
  return transform(this.value);
};

Just.prototype.toString = function() {
  return 'Just(' + this.value + ')';
};

var Nothing = {
  bind: function() {
    return this;
  },
  toString: function() {
    return 'Nothing';
  }
};

module.exports = {
  Just,
  Nothing
}
