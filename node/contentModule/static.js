
/**
 * 
 * MEAN node - content module 
 * Oct 2, 2018
 * shawn chen
 * codingDojo
 * 
 * notes - attempt at creating a module with function to respond to all different static files
 * 
 **/

var fs = require('fs');

module.exports = function(req, res){
    req.url = req.url.substring(1);
    let f_type = req.url.split('.').pop();
    if (f_type === 'html'){
        fs.readFile('views/'+req.url, 'utf8', function(error, contents){
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(contents);
            res.end();
        });
    }
    else if (f_type === 'css'){
        fs.readFile('stylesheets/'+req.url, 'utf8', function(error, contents){
            res.writeHead(200, {'Content-type': 'text/css'});
            res.write(contents);
            res.end();
        });
    } 
    else if (f_type === 'jpeg' || f_type === 'jpg'){
        console.log('fired '+req.url);
        fs.readFile('images/'+req.url, function(error, contents){
            res.writeHead(200, {'Content-type': 'image/jpg'});
            res.write(contents);
            res.end();
        });
    } else {
        console.log('Unable to fetch object '+req.url);
    }
}