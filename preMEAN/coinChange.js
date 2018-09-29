
// coinChange - input cents in whole number and output optimal change 

function coinChange(cents) {
    var coin_dict = {
        dollars: 100,
        quarters: 25,
        dimes: 10,
        nickles: 5,
        pennies: 1
    }
    var change = {}
    if (cents >= 0) {
        if (cents >= 100) {
            dollars = Math.floor(cents / coin_dict.dollars);
            cents =  cents % coin_dict.dollars;
            change.dollars = dollars;
            console.log(change)
        }
        if (cents >= 25) {
            quarters = Math.floor(cents / coin_dict.quarters);
            cents =  cents % coin_dict.quarters;
            change.quarter = quarters;
            console.log(change)
        }
        if (cents >= 10) {
            dimes = Math.floor(cents / coin_dict.dimes);
            cents =  cents % coin_dict.dimes;
            change.dimes = dimes;
            console.log(change)
        }
        if (cents >= 10) {
            dimes = Math.floor(cents / coin_dict.dimes);
            cents =  cents % coin_dict.dimes;
            change.dimes = dimes;
            console.log(change)
        }
        if (cents >= 5) {
            nickles = Math.floor(cents / coin_dict.nickles);
            cents =  cents % coin_dict.nickles;
            change.nickles = nickles;
            console.log(change)
        }
        if (cents >= 1) {
            change.pennies = cents;
            console.log(change)
        }
    }
    return change;
}

// v2

function coinChange2(cents) {
    var coin_dict = {
        dollars: 100,
        quarters: 25,
        dimes: 10,
        nickles: 5,
        pennies: 1
    }
    var total = 0;
    total += cents.dollars * coin_dict.dollars;
    total += cents.quarters * coin_dict.quarters;
    total += cents.dimes * coin_dict.dimes;
    total += cents.nickles * coin_dict.nickles;
    total += cents.pennies * coin_dict.pennies;

    return coinChange(total);
}


// main 

// version a of coinchange
console.log(coinChange(868));


// advanced version of coinchange -- pass in dict
my_wallet = {
    dollars: 7,
    quarters: 12,
    dimes: 8,
    nickles: 23,
    pennies: 18
}

console.log(coinChange2(my_wallet))
