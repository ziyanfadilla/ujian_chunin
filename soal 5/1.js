function cek(number) {
    let array = number.toString().split("0");
    let arrayBaru =[]
    for(i=0; i < array.length; i++){
        // console.log('aray asal' + array[i]);
        // console.log('array stlh displit' + array[i].split(''));
        console.log(array[i].split('').sort((a, b) => {
            return a -b 
        }));

        arrayBaru.push(array[i].split('').sort((a, b) => {
            return a - b
        }).join(''))
    }
    // console.log('array baru' + arrayBaru);
    console.log(arrayBaru.join(''));
}
cek(5643104614540314);