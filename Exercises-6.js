// 1. Melakukan Looping Menggunakan While

        console.log('LOOPING PERTAMA')
        var lopPertama = 0
        while   (lopPertama < 20) {
                lopPertama+= 2;
                console.log(lopPertama + ' - I love coding');
        }

        console.log('LOOPING KEDUA');
        var lopKedua = 22
        while   (lopKedua > 2) {
                lopKedua-= 2;
                console.log(lopKedua + ' - I will become fullstack developer');

        }

console.log('===========================================');

// 2. Melakukan Looping Menggunakan For

        console.log('LOOPING PERTAMA');

        for ( var lopPertama = 1 ; lopPertama <= 20 ; lopPertama++){

            console.log(lopPertama + ' - I love coding');
        }

        console.log('LOOPING KEDUA');

        for ( var lopKedua = 20 ; lopKedua >= 1 ; lopKedua--){

        console.log(lopKedua + ' - I will become fullstack developer');
        }

console.log('===========================================');

// 3. Angka Ganjil Genap

    for (var i = 0 ; i <= 100 ; i++){

            if ( i % 2 == 0 ){
                console.log('counter sekarang = ' + i);
                console.log('GENAP');
            }

            if ( i % 2 == 1 ){
                console.log('counter sekarang = ' + i);
                console.log('GANJIL');
            }
      }

      for (var counter = 1; counter <= 100; counter += 2) {
        console.log(`counter sekarang = ${counter}`);
            if (counter % 3 == 0) {
                console.log(`${counter} KELIPATAN 3`);
            } else {
                console.log('');
            }
    }
    
    for (var counter = 1; counter <= 100; counter += 5) {
        console.log(`counter sekarang = ${counter}`);
            if (counter % 6 == 0) {
                console.log(`${counter} KELIPATAN 6`);
            } else {
                console.log('');
            }
    }
    
    for (var counter = 1; counter <= 100; counter += 9) {
        console.log(`counter sekarang = ${counter}`);
            if (counter % 10 == 0) {
                console.log(`${counter} KELIPATAN 10`);
            } else {
                console.log('');
            }
    }

