// const data = ['Felix', 'Faqih', 'Anton', 'Coco', 'Ziyan'];
// let newData = [];

// data.map((data) => {
//     if (data.includes('an')) {
//         newData.push(data)
//     }
// });
// console.log(newData);

const name = ['Abigail', 'Alexandra', 'Alison', 'Amanda', 'Angela', 'Bella', 
'Carol', 'Caroline', 'Carolyn','Deirdre', 'Diana', 'Elizabeth', 'Ella', 'Faith', 'Olivia', 'Penelope'];

function searchName(cari,jumlah,callback){
  let newData = []
  name.filter((data) =>{
    if(data.toLowerCase().includes(cari)){
      newData.push(data)
    }
  })
  callback(newData, jumlah)
}

function search(data1, jumlah) {
console.log(data1.slice(0, jumlah))
}
searchName("an",3,search);
    
