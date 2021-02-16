function nilai(nilaiAwal, nilaiAkhir) {
    let data = [1,2,3,4,5,6,7,8,9,11,12];
    if (nilaiAwal <= nilaiAkhir && data.length > 5) {
       console.log(data.slice(1, 4)); 
    }else{
        console.log('kosong'); 

    }
    
}
console.log(nilai(1,4));