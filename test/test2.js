/**
 * Created by bluesky on 16-2-24.
 */
var shell = require('shelljs');
var str = shell.echo('hello world');
console.log(str);
console.log(shell.pwd());

var version = shell.exec('/home/bluesky/temp/test', {silent:true}).stdout;
console.log(version);


var child = shell.exec('/home/bluesky/temp/test', {async:true});
child.stdout.on('data', function(data) {
    console.log(data);
});


shell.exec('/home/bluesky/temp/test', function(code, stdout, stderr) {
    console.log('Exit code:', code);
    console.log('Program output:', stdout);
    console.log('Program stderr:', stderr);
});
