'use strict';

var base = require('./config.json');
var _ = require('lodash');

var config = _.cloneDeep(base);

config.port = process.env.PORT || 3333;

module.exports = config;

