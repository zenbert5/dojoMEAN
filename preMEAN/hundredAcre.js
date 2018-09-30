
// hundred acre woods

var tigger = { character: 'Tigger' }; 
var pooh = { character: 'Winnie the Pooh' };
var piglet = { character: 'Piglet' };
var owl = { character: 'Owl' };
var christopher = { character: 'Christopher Robin' };
var bees = { character: 'Bees' };
var rabbit = { character: 'Rabbit' };
var gopher = { character: 'Gopher' };
var kanga = { character: 'Kanga' };
var eeyore = { character: 'Eeyore' };
var heffalumps = { character: 'Heffalumps' };

    tigger.north = pooh;

    pooh.south = tigger;
    pooh.north = christopher;
    pooh.west = piglet;
    pooh.east = bees;

    piglet.north = owl;
    piglet.east = tigger.north;

    bees.west = tiger.north;
    bees.north = rabbit;

    owl.south = pooh.west;
    owl.east = pooh.north;

    christopher.south = tigger.north;
    christopher.west = piglet.north;
    christopher.east = bees.north;
    christopher.north = kanga;

    rabbit.south = pooh.east;
    rabbit.west = pooh.north;
    rabbit.east = gopher;

    gopher.west = bees.north;

    kanga.south = pooh.north;
    kanga.north = eeyore;
    eeyore.south = christopher.north;
    eeyore.east = heffalumps;
    heffalumps.west = kanga.north;
    

var player = {
    location: tigger
}

function move(direction) {
    if (direction == 'north' && player.location.north != undefined) {
        player.location = player.location.north;
        console.log('You are now at ', player.location.character,'\'s house');
    } else if (direction == 'south' && player.location.south != undefined) {
        player.location = player.location.south;
        console.log('You are now at ', player.location.character,'\'s house');
    } else if (direction == 'west' && player.location.west != undefined) {
        player.location = player.location.west;
        console.log('You are now at ', player.location.character,'\'s house');
    } else if (direction == 'east' && player.location.east != undefined) {
        player.location = player.location.east;
        console.log('You are now at ', player.location.character,'\'s house');
    } else {
        console.log('You may not go that way.')
    }
}