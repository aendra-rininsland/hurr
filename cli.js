#!/usr/bin/env node
'use strict';
var meow = require('meow');
var hurr = require('./');

var cli = meow({
  help: [
    'Usage',
    '  hurr <whatever you\'d normally supply to gulp or grunt>',
    '',
    'Example',
    '  hurr serve'
  ].join('\n')
});

hurr(cli.input[0]);
