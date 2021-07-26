'use strict';

import {app} from './src/App.js';
import http from 'http';

export let db = {};

/**
 * Normalize a port into a number, string, or false.
 */
function normalizePort (val) {
    var port = parseInt(val, 10);
    if (isNaN(port)) {
        // named pipe
        return val;
    }
    if (port >= 0) {
        // port number
        return port;
    }
    return false;
}

const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

const server = http.createServer(app);

server.listen(port);
console.log('running on http://localhost:'+ port);
