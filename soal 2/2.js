let data = {
    id : 1,
    name : "Leanne Graham",
    username : "Bret",
    email : " Sincere@april.biz",
    addres : {
      street : "Kulas Light",
      suite : " Apt. 556",
      city : "Gwenborough",
      zipcode : "92998-3874",
      },
      phone : "1-770-736- 8031 x56442",
      website : "hildegard.org",
  }
  //spread operator
  let data1 = {...data};
  data1 = {
    name : "ziyan fadilla saporette",
    email : " ziyanfadilla1@gmail.com",
    hoby : " ertyhbn "
  }
  //destructring = untuk mengambil data  street dan city
  const {street, city} = data;
  
  console.log(data1);
  console.log(street);
  console.log(city) ; 