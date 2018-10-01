/*****************************************************
 * 
 *  MEAN - jsHoist 
 *  Sept 30, 2018
 *  shawn chen
 *  codingDojo
 * 
 *****************************************************/

// as-seen by intepreter

// 1.
var hello;
console.log(hello);                                   
hello = 'world';

// 2.
var needle = 'haystack';
function test(){
	var needle = 'magnet';
	console.log(needle);
}
test();

// 3.
var brendan = 'super cool';
function print(){
	brendan = 'only okay';
	console.log(brendan);
}
console.log(brendan);

// 4.
var food = 'chicken';
function eat(){
	food = 'half-chicken';
	console.log(food);
	var food = 'gone';
}
console.log(food);
eat();

// 5.
var mean = function() {
	food = "chicken";
	console.log(food);
	var food = "fish";
	console.log(food);
}
mean();  // throw error
console.log(food);
console.log(food);

// 6.
var genre = "disco";
function rewind() {
	genre = "rock";
	console.log(genre);
	var genre = "r&b";
	console.log(genre);
}
console.log(genre);
rewind();
console.log(genre);

// 7.
var dojo = "san jose";
function learn() {
	dojo = "seattle";
	console.log(dojo);
	var dojo = "burbank";
	console.log(dojo);
}
console.log(dojo);
learn();
console.log(dojo);


// 8.
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
// const variable cannot be reassigned
        dojo = "closed for now";
    }
    return dojo;
}
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));



// ** prediction section **

// 1.
console.log(hello);                                   
var hello = 'world';                                 
// expect: undefined


// 2.
var needle = 'haystack';
test();
function test(){
	var needle = 'magnet';
	console.log(needle);
}
// expect: magnet -- test is hoisted


// 3. 
var brendan = 'super cool';
function print(){
	brendan = 'only okay';
	console.log(brendan);
}
console.log(brendan);
// expect: super cool


// 4.
var food = 'chicken';
console.log(food);
eat();
function eat(){
	food = 'half-chicken';
	console.log(food);
	var food = 'gone';
}
// expect: chicken, half-chicken


// 5. 
mean();
console.log(food);
var mean = function() {
	food = "chicken";
	console.log(food);
	var food = "fish";
	console.log(food);
}
console.log(food);
// expect: TypeError - mean is not a function


// 6. 
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
	genre = "rock";
	console.log(genre);
	var genre = "r&b";
	console.log(genre);
}
console.log(genre);
// expect: undefined, rock, r&b, disco


// 7.
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
	dojo = "seattle";
	console.log(dojo);
	var dojo = "burbank";
	console.log(dojo);
}
console.log(dojo);
// expect: san jose, seattle, burbank, san jose


// 8. 
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
        const dojo = {};
        dojo.name = name;
        dojo.students = students;
        if(dojo.students > 50){
            dojo.hiring = true;
        }
        else if(dojo.students <= 0){
    // const variable cannot be reassigned
            dojo = "closed for now";
        }
        return dojo;
}
// expect: dojo = { name: Chicago, students: 65, hiring: true }, TypeError assigning to const