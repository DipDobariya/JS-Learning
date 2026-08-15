// for of
//["" , " ",""]
// [{},{},{}]

// const arr = [1,2,3,4,5,6]

// for (const num of arr) {
//     console.log(num);
    
// }
// const greeting = "Welcome to my practice program"
// for (const greet of greeting) {
//      if (greet === " ") {
//         continue;
//     }
//     console.log(`Each char is ${greet}`);
   
    
// }


//Maps

// const map = new Map()
// map.set('IN',"India")
// map.set('USA',"United state of America")
// map.set('IN',"India")
// // console.log(map);

// for (const [key,value] of map) {
//  console.log(`the key is ${key} and value is ${value}`);
// 

//  const myobj = {
//     'game1': 'kabbadi',
//     'game2': 'cricket',
//     'game3': 'kho-kho'
    
//  }
//  for (const [key1,value1] of myobj) {
//     console.log(`the key is ${key1} and value is ${value1}`);
//  }
// }

const myobj = {
    'js': 'JavaScript',
    'py': 'Python',
    'rb': 'Ruby'
}
// for (const key in myobj) {
//    console.log(`${key} shortcut for ${myobj[key]}`);
// }

// const programing = ['js','py','rb']
// for (const key in programing) {
//     console.log(programing[key]);
// }


//foreach

const coding = ['js','py','rb']
// coding.forEach( function (item){
//     console.log(item);
// })

// coding.forEach( (item)=>{
//     console.log(item);
    
// })

// function printMe(item){
//     console.log(item);
    
// }
// coding.forEach(printMe)

// coding.forEach((item, index, arr)=>{
//     console.log(item, index, arr); 
// })

const mycoding = [
    {
        languagename:"javascript",
        languageFileName: "js"
    },
    {
        languagename:"java",
        languageFileName : "java"
    },
    {
        languagename:"python",
        languageFileName : "py"
    }
]
mycoding.forEach((item) => {
    console.log(item.languagename);
    
})