/*****************************************************
 * 
 *  MEAN - js Objects
 *  Shawn Chen
 *  Sept 30, 2018
 *  CodingDojo
 * 
 *  notes: console.log formatting can be tricky 
 * - format before sending to console.log
 *****************************************************/


let students = [
    {name: 'Remy', cohort: 'Jan'},
    {name: 'Genevieve', cohort: 'March'},
    {name: 'Chuck', cohort: 'Jan'},
    {name: 'Osmund', cohort: 'June'},
    {name: 'Nikki', cohort: 'June'},
    {name: 'Boris', cohort: 'June'}
];

let users = {
    employees: [
        {'first_name':  'Miguel', 'last_name' : 'Jones'},
        {'first_name' : 'Ernie', 'last_name' : 'Bertson'},
        {'first_name' : 'Nora', 'last_name' : 'Lu'},
        {'first_name' : 'Sally', 'last_name' : 'Barkyoumb'}
    ],
    managers: [
        {'first_name' : 'Lillian', 'last_name' : 'Chambers'},
        {'first_name' : 'Gordon', 'last_name' : 'Poe'}
    ]
};

// iterate students dictionary
function showStudents(arr){
    for (var x=0; x<arr.length; ++x) {
        console.log('Name: ', arr[x]['name'], ' Cohort: ', arr[x]['cohort']);
    }
}

// iterate employee manaager dictionary
function employeeManagers(arr){
    var output = '';
    for (key in arr){
        console.log(key.toUpperCase());
        for (var x=0; x<arr[key].length; ++x) {
            // console.log is a piece of crap!  need to construct string first
            output = (x+1)+' - '+arr[key][x].last_name+', '+arr[key][x].first_name;
            console.log(output);
        }
    }
}

/*
*   main
*/
showStudents(students);
employeeManagers(users);