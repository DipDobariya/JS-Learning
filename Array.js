const myArray = [1,2,3,4,5,6]
// console.log(myArray);
// console.log(myArray[3]);


const myarry = new Array(1,2,3,4)
// console.log(myarry);

//Array Method  

// myarry.push(5)
// myarry.pop(5)
// myarry.unshift(0)
// myarry.shift()

// console.log(myarry.includes(3)); 

// const newArry =myarry.join()

// console.log(myarry);
// console.log(newArry);

console.log("A" ,myarry);

const my1 =myarry.slice(1,3)

console.log(my1);
console.log("B", myarry);

const my2 =myarry.splice(1,3)

console.log("C", myarry);
console.log(my2);



const marvel = ["Thor", "Spidy", "Ironman"]
const dc = ["Superman", "flash", "batman"]

// marvel.push(dc)
// const all = marvel.concat(dc); 
// console.log(marvel);
// console.log(all);

const all_heros = [...marvel,...dc]
// console.log(all_heros);


const another_arry = [1,2,3,[4,5,6],7,8,[9]]
const real_Another_arry = another_arry.flat(Infinity)
console.log(real_Another_arry);

console.log(Array.isArray("Dip"));
console.log(Array.from("Dip"));

const score1 = 100
const score2 = 200
const score3 = 300

console.log(Array.of(score1,score2,score3));


