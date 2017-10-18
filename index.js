#!/usr/bin/env node

'use strict';

var program = require('commander');

program
    .version('0.1.0')
    .option('-h, --host [value]', 'Specify db hostname')
    .option('-u, --user [value]', 'Specify db user')
    .option('-p, --pass [value]', 'Specify db password')
    .parse(process.argv);

var mysql = require('mysql');

console.log('Host: ' + program.host);
console.log('User: ' + program.user);
console.log('Password: ' + program.pass);

var connection = mysql.createConnection({
    host: program.host,
    user: program.user,
    password: program.pass
});

connection.connect(function(err) {
    if (err) {
        console.log('error connecting: ' + err.stack);
        return;
    }

    console.log('connected as id ' + connection.threadId);
});
