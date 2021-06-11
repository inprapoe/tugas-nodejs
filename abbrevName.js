/*
    Buatlah nama yg ada pada variable menjadi nama singkatan dan harus berubah menjadi huruf besar
    contoh : 
    Sam Harris maka akan menjadi SH
*/ 
let theName = "indri saraswati"

const getInitial = () => {
    let getLetter =  theName.match(/\b\w/g).join('');
    return getLetter.toUpperCase();
}

console.log(getInitial())