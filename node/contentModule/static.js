
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
    var htmlMatch = /[^.]+\.(html|ejs)/g
    var cssMatch = /[^.]+\.(css)/g
    var imgMatch = /[^.]+\.(jpg|jpeg|img)/g
    if (req.url === '/favicon.ico'){
        res.end();
        return;
    }
    if (req.url.match(htmlMatch)){
        console.log('match html - routing to /views' + req.url);
        fs.readFile('./views'+req.url, 'utf8', function(error, contents){
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(contents);
        });
    }
    else if (req.url.match(cssMatch)){
        fs.readFile('./stylesheets'+req.url, 'utf8', function(error, contents){
            res.writeHead(200, {'Content-type': 'text/css'});
            res.end(contents);
        });
    }
    else if (req.url.match(imgMatch)){
        console.log('fired '+req.url);
        fs.readFile('./images'+req.url, function(error, contents){
            res.writeHead(200, {'Content-type': 'image/jpg'});
            res.end(contents);
        });
    } 
    else {
        console.log('Unable to fetch object '+req.url);
    }
}