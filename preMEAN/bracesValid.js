
// braceValid using stack and dictionary for validation

function bracesValid(arr) {
    if (arr.length % 2 != 0) {
        return false;
    } else {
        var box = [];
        var dict = {
            lefts: ['(', '{', '['],
            rights: [')', '}', ']'],
            paren_left: '(',
            paren_right: ')',
            cur_left: '{',
            cur_right: '}',
            sq_left: '[',
            sq_right: ']'
        };
        for (x = 0; x < arr.length; ++x) {
            if (arr[x] in dict.lefts) {
                box.push(arr.shift());
                console.log(box);
            } else if (arr[x] in dict.rights) {
                item = box.pop();
                if (item == undefined) {
                    return false;
                } else if (item in dict.lefts) {
                    if (item == dict.paren_left && arr[x] == dict.paren_right) {
                        continue;
                    } else if (item == dict.cur_left && arr[x] == dict.cur_right) {
                        continue;
                    } else if (item == dict.sq_left && arr[x] == dict.sq_right) {
                        continue;
                    } else {
                        return false;
                    }
                }
            }
        }
        return true;
    }
}

// main
console.log('\n::::::: validate braces ::::::\n\n')

test1 = '{[]}';
test2 = '[]{}()';
test3 = '{[[]]}()';
test4 = '}';
test5 = '{[(()]}';

console.log(test1+' --> '+bracesValid(test1));
console.log(test2+' --> '+bracesValid(test2));
console.log(test3+' --> '+bracesValid(test3));
console.log(test4+' --> '+bracesValid(test4));
console.log(test5+' --> '+bracesValid(test5));