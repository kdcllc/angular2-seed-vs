//ADDED
var exec = require('child_process').exec;

exec('webpack-dev-server --open --inline --colors --progress --display-error-details --display-cached --port 8080 --content-base src', function(err, stdout, stderr) {
if (err) {
    console.error(err);
    return;
}
    console.log(stdout);
});

//var WebpackDevServer = require("webpack-dev-server");
//var config = require('./webpack.config.js');

//new WebpackDevServer(webpack(config), {
//    contentBase: 'src',
//    hot: true,
//    debug: true
//}).listen(port, host, function (err, result) {
//    if (err) {
//        console.log(err);
//    }
//});
//console.log('-------------------------');
//console.log('Local web server runs at http://' + host + ':' + port);
//console.log('-------------------------');

