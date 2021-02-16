function kebalik(isi) {
	var kalimat = isi;
	var hasil = '';
   for (let i = isi.length - 1; i >= 0; i--) {
	 hasil = hasil + kalimat[i];
	}
	
	return hasil;
   }
console.log(kebalik('plugin cinta saya'));



function reverseWords(sentence){
	let words = sentence.split(" ").reverse(); 
	let string = "";
	for(word in words)
		string += (word > 0 ? " " : "") + words[word]; 
	return string;
}

console.log(reverseWords("plugin cinta saya"));