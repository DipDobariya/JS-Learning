//Stack (Primitive),  Heap  (non-Primitive)

const name="Dip Dobariya"
let anotherName=name
anotherName="Dip Patel"

console.log(name);
console.log(anotherName);


let userOne={
    email: "user@gmail.com",
    upi: "usr@sbi"
}

let userTwo = userOne

userTwo.email = "Dip@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);

