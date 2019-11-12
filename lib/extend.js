;(function(global, factory) {
  if (typeof exports === 'object' && typeof module === 'object') {
    module.exports = factory()
  } else if (typeof define === 'function' && define.amd) {
    define([], factory())
  } else if (typeof exports === 'object') {
    exports['WSExtend'] = factory()
  } else {
    global['WSExtend'] = factory()
  }
})(this, function() {
  var _toString = Object.prototype.toString
  var _slice = Array.prototype.slice

  function isArray(array) {
    return _toString.call(array) === '[object Array]'
  }

  function isObject(object) {
    return _toString.call(object) === '[object Object]'
  }

  function isPlainObject(object) {
    return isObject(object) && Object.getPrototypeOf(object) == Object.prototype
  }

  function _extend(target, source, deep) {
    for (var key in source) {
      if (deep && (isPlainObject(source[key]) || isArray(source[key]))) {
        if (isPlainObject(source[key]) && !isPlainObject(target[key])) {
          target[key] = {}
        }
        if (isArray(source[key]) && !isArray(target[key])) {
          target[key] = []
        }
        _extend(target[key], source[key], deep)
      } else if (source[key] !== void 0) {
        target[key] = source[key]
      }
    }
  }

  function extend(target) {
    var deep,
      arg,
      args = _slice.call(arguments, 1)

    if (typeof target == 'boolean') {
      deep = target
      target = args.shift()
    }

    var i, len
    for (i = 0, len = args.length; i < len; i++) {
      arg = args[i]
      _extend(target, arg, deep)
    }

    return target
  }

  function clone(value, deep) {
    deep = deep === true

    return extend(deep, {}, value)
  }

  return {
    extend: extend,
    clone: clone
  }
})
