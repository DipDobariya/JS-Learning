let a = 300
if (true) {
    let a =10
    const b=20
    // var c=30
    // console.log("Inner:" , a);
    
}
// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const name="Dip"

    function two(){
        const website="youtube"
        // console.log(name);
        
    }
    // console.log(website);
    two()
}
one()

if(true) {
    const name ="Dip"
    if(name==="Dip"){
        const website ="youtube"
        // console.log(name + website);
        
    }
    // console.log(website);
    
}
// console.log(name);



// ***********************************************

function add(num){
    return num+1

}
console.log(add(3));



const addtwo = function(num){
    return num+1

}
console.log(addtwo(33));
