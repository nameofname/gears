"use strict";

const glob = require('glob');
glob.sync('/tests/**/*_spec.js', { root : __dirname }).forEach(require);
