'use strict'

module.exports = function(cp){
  return {
    interfaces: require('./interfaces')(cp),
    configure: require('./configure')(cp)
  };
}
