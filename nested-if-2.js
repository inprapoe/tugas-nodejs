/* 

Sebuah wahana permainan mengenakan tarif Rp15.000 untuk satu kali bermain.
Selain itu juga disyaratkan pengunjung berusia minimal 7 tahun dan tinggi badan minimal 125 cm.
Khusus untuk anak dibawah usia 10 tahun wajib didampingi oleh orang dewasa.

INSTRUCTIONS
1. Jika uang tidak cukup, tampilkan "Maaf, uang kamu tidak cukup".
   Jika uang cukup, maka lanjut ke step berikutnya.
2. Jika usia pengunjung kurang dari 7 tahun atau tinggi badan kurang dari 125, tampilkan
   "Kamu belum diperbolehkan menaiki wahana ini".
   Jika tidak, maka lanjut ke step berikutnya.
3. Jika pengunjung berusia dibawah 10 tahun dan tidak didampingi oleh orang dewasa, tampilkan
   "Kamu harus ditemani oleh orang dewasa untuk menaiki wahana ini"
   Jika tidak, maka tampilkan "Selamat menikmati wahana ini".

*/

var money = 15000; // silahkan beri nilai
var age = 7;// silahkan beri nilai
var height = 150;// silahkan beri nilai
var accompaniedByAdult = false;// silahkan beri nilai dengan boolean

// Write your code here

money < 15000 
? (
   console.log('Maaf, uang kamu tidak cukup')
) : age < 7 || height < 125 
? (
   console.log('Kamu belum diperbolehkan menaiki wahana ini')
) : age < 10 && accompaniedByAdult === false
? (
   console.log("Kamu harus ditemani oleh orang dewasa untuk menaiki wahana ini")
) : (
   console.log("Selamat menikmati wahana ini")
)





 






