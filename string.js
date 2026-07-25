const name="Dip"
const marks = 89

console.log(name + marks);   //Old Way to Concatinat 
console.log(`hello my name is ${name} and my obtain marks is ${marks}`);   //New Wat for Concatinat

console.log(name.length);
console.log(name.toUpperCase());
console.log(name.charAt(2));
console.log(name.indexOf('p'));


const newString = name.substring(0,2)
console.log(newString);

const anotherString = name.slice(-2,1)
console.log(anotherString);


const str = "   Dip   "
console.log(str);
console.log(str.trim());


const url = "https://dip.com/dip%20dobariya"
console.log(url.replace('%20' , '_' ));

