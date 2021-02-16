// alter confirm prompt

    // alert('silakan mencoba');
    // var coba = true;
    
    // while( coba === true){
    //     var nama = prompt('masukkan nama');
    //     alert(' hallo ' + nama );
    //     coba = confirm('coba lagi');    
    // }
    // alert('terimakasih telah mencoba');


//forEach
//method forEach digunakan untuk memanggil setiap nilai disebuah array secara berurutan. Dibawah ini adalah contoh cara mem-print setiap nilai dalam array numbers sesuai urutannya.

// const nama = ['ziyan','hawa','cantik'];
// nama.forEach((nama) => {
//     console.log(nama);
// });

//filter


// const numbers = [1,3,5,2,8];
// const filteredNumbers = numbers.filter((Number)=>{
//     return Number > 1 ;
// });
// console.log(filteredNumbers);

// //map
// const numbers = [1,3,5,2,8];
// const doubledNumbers = numbers.map((number)=> {
//     return number *2;
// });
// console.log(doubledNumbers);

//scope

        // let nama = 'ziyan';

        // const greeting = () => {
        //     let nama = 'hawa'; // scope 
        //     return `Hello ${nama}!`;
        // }
        // greeting(); 
        // console.log(nama); 

//slice = menampilkan string dari karakter ke berapa sampai keberapa
// var angka = [1,2,3,4,"a","b","c","d"];
  
// //slice dari index ke 2 sampai 5
// var arr2 = angka.slice(2,5)
// console.log(arr2.toString()); 
  
// //slice dari index ke 4 sampai akhir array
// var arr3 = angka.slice(4)
// console.log(arr3.toString());         
  
// //slice dari index ke 5 dari akhir array sampai
// //index ke 2 dari akhir array
// var arr5 = angka.slice(-5,-2)
// console.log(arr5.toString());

// push = menambah data dibelakang
let hewan = ["ayam", "badak","kancil","kambing","sapi"];
// hewan.push("kancil","kambing","sapi");

//length= panjang array
// console.log(hewan.length);

//shif/unshif

//shif = menghapus index dibagian awal
// hewan.shift();
