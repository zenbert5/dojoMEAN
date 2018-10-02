var my_module = require('./my_module');
my_module.greet();
my_module.add(5,6);


module.exports = {
    greet: function(){
        console.log("we are now using a module!");
    }
}

module.exports = {
    greet: function(){
        console.log("we are now using a module!");
    },
    add: function(num1, num2){
        console.log("the sum is:", num1 + num2);
    }
}



module.exports = function(){
    return {
        greet: function(){
            console.log("we are now using a module!");
        },
        add: function(num1, num2){
            console.log("the sum is:", num1 + num2);
        }
    }
}

/*
The files app.js and my_module.js are in the same directory. Normally, the require() method 
looks for node modules that aren't in the same directory as the file that is running; by default, 
the require() method looks for the modules located in a folder called node_modules. 
To tell require() to look in the current directory (i.e. the folder that the file is located in) 
we have to include "./" in front of the file path. "./" (dot-slash) is the file path for the current directory.
*/

var my_module = require('./my_module')();     //notice the extra invocation parentheses!
console.log(my_module);
my_module.greet();
my_module.add(5,6);
