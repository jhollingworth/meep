var _ = require('lodash');
var React = require('react');
var MeepComponent = require('./component');
var Meep = _.extend({}, React, MeepComponent);

module.exports = Meep;