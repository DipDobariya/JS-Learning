

const user = {
    name: "Dip",
    price : 399,

    welcomeMessage: function(){
        console.log(`${this.name}, welcome to website`);
        console.log(this);
        
        
    }
}
// user.welcomeMessage()
// user.name = "Sam"
// user.welcomeMessage()

// console.log(this);


// function chai(){
//     let username="Dip"
//     console.log(this.username);
    
// }
// chai()



// const chai = function (){
//     let username="Dip"
//     console.log(this.username);
    
// }

const chai = () =>{
    let username="Dip"
    console.log(this.username);
    
}
// chai()


// const addtwo = (num1,num2) =>{
//     return num1 + num2
// }

// const addtwo = (num1,num2) => num1 + num2

const addtwo = (num1,num2) => (num1 + num2)
console.log(addtwo(22,3));
