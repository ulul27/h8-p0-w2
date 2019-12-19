function xo(str) {
    // you can only write your code here!
    var countX = 0
    var countO = 0
    var hasil

    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'x') {
            countX += 1
        } else if (str[i] === 'o') {
            countO += 1
        }

        if (countX === countO) {
            hasil = true
        } else {
            hasil = false
        }
    }
    return hasil
}

// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true

/*
jika pakai built in function
----------------------------

var x = (str.split("x").length);
var o = (str.split("o").length);
if (x === o) {
    return true;
} else if (x !== o) {
    return false;
}

*/