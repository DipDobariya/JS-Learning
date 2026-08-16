const myNum = [1,2,3,4]

// const myTotal = myNum.reduce( function (acc,curval){
//     console.log(`acc: ${acc} and curval: ${curval}`);
    
//     return acc+curval
// },0)

const myTotal = myNum.reduce((acc,curval)=>acc+curval,0)

console.log(myTotal);


const shopingCart = [
    {
        itemname: "JS Course",
        price:2000
    },
    {
        itemname: "Python",
        price:3000
    },
    {
        itemname: "MERN",
        price:4000
    },
    {
        itemname: "Java",
        price:5000
    }
]

const total = shopingCart.reduce((acc, item )=>acc+item.price ,0)

console.log(total);
