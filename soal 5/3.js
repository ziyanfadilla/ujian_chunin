function angka(n,a,b){
    let angka1 = a;
    let newAngka =[]
    newAngka.push(angka1)
    for (a=1; a<n; a++){
      newAngka.push(angka1 += b)
    }
    console.log(newAngka)
  
  }console.log(angka(2,3,4));