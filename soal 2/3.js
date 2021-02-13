function printSegitiga() {
  let string = '';
  for ( x = 5; x >= 0; x--) {
    for(y = 5; y > x; y--){
      // process.stdout.write('*');
      string += ' '
    }
    for(z = 1; z < (x * 2- 1); z++){
      // process.stdout.write(z);
      string += z;
    }
    string += '\n'
  }

  console.log(string)
} 
printSegitiga();