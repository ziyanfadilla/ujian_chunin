/* Buat program yang menghitung rata-rata UN beserta gradenya, 
dengan mengisi 4 nilai yakni Bahasa indonesia,Bahasa Inggris Matematika dan IPA, yang di dalam program 
tersebut memiliki validasi yaitu semua nilai tersebut harus diisi dan juga untuk
grade memiliki kondisi dengan ketentuan sebagai berikut: 90 - 100 = A,
 80 - 89 = B, 
 70 - 79 = C, 
 60 - 69 = D, 
 0 - 59 = E. */

function un (a, b, c, d){
    let nilai;
    nilai = a + b + c + d;
    mean = nilai/4;
    if( mean > 90){
      console.log(`nilai rata + rata : ${mean}`);
      console.log('A');
    }else if (mean >= 80 &&  mean >= 89){
      console.log(`nilai rata + rata : ${mean}`);
      console.log('B');
    } else if (mean >= 70 && mean >=79){
      console.log(`nilai rata + rata : ${mean}`);
      console.log('C')
    } else {
     console.log(`nilai rata + rata : ${mean}`);
      console.log('E');
    }
  
  }
  
  un(90,100,98,76,90);
  
  