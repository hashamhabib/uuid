// var v1 = require('./v1');
import * as v1 from './v1';
// var v4 = require('./v4');

import * as v4 from './v4';

var uuid = {};
uuid.v1 = v1;
uuid.v4 = v4;

// module.exports = uuid;
export { uuid }