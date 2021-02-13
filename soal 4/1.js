console.log(" CONTOH PROMISE 1");

let tunggu = true;
const janji = new Promise((resolve,reject) => {
    if (tunggu) {
        resolve('hmm okay kita beli jajan');
        
    }else{
        reject('saya tidak lapar' )
    }
});
janji
    .then(response => console.log('ok : '+ response))
    .catch(response => console.log('not ok! :' + response));

console.log(janji);

console.log("CONTOH PROMIS 2");

let jalan = true;
const jogja = new Promise((resolve, reject) => {
    if (jalan) {
        setTimeout(() => {
            resolve("kuy agendakan")
        }, 2000);
        
    } else{
        setTimeout(() => {
            reject('"aku pikir- pikir dulu ')
        }, 2000);
    }
}); 

console.log('mulai');
jogja
    .finally (() => console.log('saya tunggu kepastianya'))//dijlnkan ketika then catch ssudah siap .  
    .then(response => console.log('ok!' + response))
    .catch(response => console.log('sorry ' + response));

console.log('selesai');
console.log(jogja);

console.log("CONTOH POMISE 3");

let buku = false;
const perpus = new Promise ((resolve,reject) =>{
    if (!buku) {
        resolve(' suka membaca diperpus');
        
    }else{
        reject(' tidak suka membaca diperpus')
    }
});
perpus
    .then(response => console.log('yah saya '+ response))
    .catch(response => console.log('sorry saya' + response));

console.log(buku);