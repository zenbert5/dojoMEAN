
arr = [
    [1, 3, 7, 8],
    [1, 3, 7, 8],
    [1, 3, 7, 8],
    [1, 3, 7, 8],
];

console.log(arr.length)

const regex = '11:12:33PM';

var re = new RegExp('^.{8}PM$');
if (re.test(regex)) {
    console.log('yes!')
} else {
    console.log('no!')
}

var newRegex = regex.substring(0, 8);
console.log(newRegex)