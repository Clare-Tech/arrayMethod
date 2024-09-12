"use strict"

const movement = [100,450,-400,3000,-650,-130,70,1300]
let text = "<ul>"

// using for/of
// const newArr = []
// for(let movements of movement){
//     newArr.push(movements*1.1)
// }
// console.log(newArr);


// // using for loop
// for(let i = 0; i<movement.length;i++){
//     text += `<li>This is ${movement[i]}</li>`
// }
// text += "</ul>"
// document.write(text);

// // using forEach()
// movement.forEach((text, index)=>{
//     console.log(`${index+1}: ${text}`);
    
// })
// console.log("------------------");


// // map - returns a new array
const euroToUSD = 1.1
const movements = movement.map((value, currentIndex, array)=>{
    // return (value * euroToUSD).toFixed()
    // if(value > 0){
    //     return ` Movement ${currentIndex+1}: You deposited ${value}`
    // }else{
    //     return ` Movement ${currentIndex + 1}: You withdrew ${Math.abs(value)}`
    // }
    return ` Movement ${currentIndex+1}: You ${value > 0 ?  "deposited" : "withdrew"} ${Math.abs(value)}`
})
console.log(movements);

