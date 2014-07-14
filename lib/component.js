var React = require('react');

var MeepComponent = {
  createClass: function(spec) {
    var Class = React.createClass(spec);

    return function (props, children) {
      var instance = Class(props, children);

      if(spec.controller) {
        instance.controller = new spec.controller(instance);
      }

      return instance;
    }
  }
};

module.exports = MeepComponent;