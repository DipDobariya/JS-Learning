function sayMyName(){
    console.log("D");
    console.log("I");
    console.log("P");
    
}
//sayMyName()


// function addNumbers(no1,no2){
//     console.log(no1+no2);
    
// }


function addNumbers(no1,no2){
    // let result = no1+no2 
    // return result;
    return no1 + no2
}

const result = addNumbers(11,2)
// console.log("Reault: ",result);


function loginUser(name = "Dip"){
    if(name===undefined){
        console.log("Please Enter Name");
        return
        
    }
    return `${name} just logged in`
}
// console.log(loginUser("Dip"));
// console.log(loginUser());


// function calculateCart(...no1){   //...=>Rest Op

function calculateCart(val1,val2,...no1){ 
    return no1 
}
// console.log(calculateCart(2 ,22,222));


const User = {
    username: "Dip",
    price: 199
}

function handleObjet(anyobject){
    // console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
    
}
// handleObjet(User)
handleObjet(
    {
        username:"Dip",
        price: 333 
    }
)


const myArray = [200, 300, 400, 500]

function returnSecond(getArray){
    return getArray
}
// console.log(returnSecond(myArray));
console.log(returnSecond([1,2,3,4,5,5]));
