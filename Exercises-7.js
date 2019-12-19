// 1. Menyusun Barisan Bintang

var rows1 = 5;
while (rows1 > 0) {
    console.log('*');
    rows1--;
}
console.log('=================================');
// 2. Menyusun Barisan Bintang Dengan Nested Looping

var rows2 = 5;
for (rowLoop = 0; rowLoop < rows2; rowLoop++) {
    var kombinasiBintang = "";
    for (bintang = 0; bintang < rows2; bintang++) {
        kombinasiBintang += '*';
    }
    console.log(kombinasiBintang);
}
console.log('=================================');
// 3. Menyusun Barisan Tangga Bintang Dengan Nested Looping

var rows3 = 5;
for (rowLoop = 1; rowLoop <= rows3; rowLoop++) {
    var kombinasiBintang = "";
    for (bintang = 0; bintang < rowLoop; bintang++) {
        kombinasiBintang += '*';
    }
    console.log(kombinasiBintang);
}