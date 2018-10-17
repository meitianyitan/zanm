const opn = require('opn');
const path = require('path');

const coverageFile = path.join(__dirname, '../test/coverage/index.html');

opn(coverageFile);
