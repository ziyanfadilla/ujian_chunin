//if - else

    let ziyan = true;
    if (!ziyan){
        console.log(ziyan + ' fadilla saporette');
    }else{
        console.log('sapa kah anda ? ');
    }
    console.log(ziyan);


//switch - case


// Buat switchpernyataan yang akan mengingatkan "Halo" jika fruitsadalah "pisang", dan "Selamat datang" jika fruitsadalah "apel".

let buah = prompt ('masukkan nama buah');

switch (buah) {
    case 'banana':
        alert('Hello gais');
        break;
    case 'apple':
        alert('Welcome');
        break;
    default:
         alert('ketikan buah banana atau apple')
        break;
}
