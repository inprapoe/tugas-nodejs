// sembunyikan lah no hp berikut apabila dia ganjil maka 5 no belakang berubah menjadi x
// jika genap maka cukup 4 nomor yg menjadi x
// contoh = 081213459897 menjadi 0812134xxxxx karena angka paling belakang adalah 7 (ganjil)
// contoh2 = 081213459898 menjadi 08121345xxxx karena angka paling belakang adalah 8 (genap)


let nomor = '0812345678';
let digits = [];

for (let i = 0; i < nomor.length; i++) {
    digits.push(nomor[i]);
}

switch (nomor.length >= 11) {
    case true:     
        let censor = (many) => {    
            digits.splice(digits.length - many - 1, many);
            for (let i = 0; i < many; i++) {
                digits.push('*');
            }
        }
        digits.length % 2 === 0 ? censor(4) : censor(5);        
        console.log(digits.join(''))
        break;

    case false:
        console.log('Nomor telepon harus lebih/sama dengan 11 angka.')
        break;

    default:
        break;
}

