
/*

1. within the express app, execute 'ng build --watch' in term to create
the 'dist' (distribution) folder with the transcompiled/minimized code
of the angular app

2. the --watch will recompile the code when it changes, e2e and src
folders are also created

// following declaration needs to be in the express declaration
app.use(express.static( __dirname + '/public/dist/public' ));

*/
