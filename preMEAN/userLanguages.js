
// users (languages) baseline + bonus

users = [
    {
        fname: "Kermit",
        lname: "the Frog",
        languages: ["Python", "JavaScript", "C#", "HTML", "CSS", "SQL"],
        interests: {
            music: ["guitar", "flute"],
            dance: ["tap", "salsa"],
            television: ["Black Mirror", "Stranger Things"]
        }
    },
    {
        fname: "Winnie",
        lname: "the Pooh",
        languages: ["Python", "Swift", "Java"],
        interests: {
            food: ["honey", "honeycomb"],
            flowers: ["honeysuckle"],
            mysteries: ["Heffalumps"]
        }
    },
    {
        fname: "Arthur",
        lname: "Dent",
        languages: ["JavaScript", "HTML", "Go"],
        interests: {
            space: ["stars", "planets", "improbability"],
            home: ["tea", "yellow bulldozers"]
        }
    }
];

var intro = '';
var interests = '';
for (var x = 0; x < users.length; ++x) {
    // console.log(users[x]);
    intro = users[x].fname + ' ' + users[x].lname + ' knows ';
    interests = users[x].fname + ' ' + users[x].lname + ' is also interested in ';
    for (var y = 0; y < users[x].languages.length - 1; ++y) {
        intro += users[x].languages[y] + ', ';
    }
    intro += 'and ' + users[x].languages[users[x].languages.length - 1] + '.';
    console.log(intro);
    for (const [key, value] of Object.entries(users[x].interests)) {
        for (var z = 0; z < value.length - 1; ++z) {
            interests += value[z] + ', ';
        }
        interests += 'and ' + value[value.length - 1] + '.';
    }
    console.log(interests);
}

