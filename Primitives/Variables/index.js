//Basic variables

let name="elias jaber"
let age=25;
let cgpa=4.5;
console.log(`name :${name} and age : ${age} and cgpa :${cgpa}`)

//let vs var vs const

for(let i=0;i<1;i++){
    let number1= 10;
    console.log("value1 using let inside for-loop:",number1)
}
//you can not acces let outside the for-loop 
//console.warn("value1 using let outside for-loop:",number1)

for(let i=0;i<1;i++){
    var number2= 10;
    console.log("value1 using let inside for-loop:",number2)
}
console.warn("you can access var outside the for-loop:",number2)

const pi=3.12;
console.log("value of pi(using variable as const keyword) :",pi);

console.log("you can't change the value of pi becasue we declared the pi as const :",pi);




