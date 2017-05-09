"use strict";

const glob = require('glob');

// unit tests:
glob.sync('/**/*_spec.js', { root : __dirname }).forEach(require);
