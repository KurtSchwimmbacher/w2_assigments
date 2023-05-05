let firstName = "Kurt";
let lastName = "Schwimmbacher";
let age = 20;
const subject = "Development";

console.log("Hello, my name is "+ firstName + " "+lastName + ", I am "+age+ " years old and I am studying "+subject);



let numOne = 5;
let numTwo = 8;
let numThree = 9;
let numFour = 1;
let answer = 0;

answer = numOne+numTwo/numThree * numFour;

console.log(answer);


let timmy = 10.00;
let susan = 25.00;

let value = (0.15*timmy)*(0.26*susan);

console.log(value);


let studentArr = [john = 69, tim = 42, alfie = 12, gwen = 99];
let val = 0;

for( let i = 0; i< studentArr.length; i++){
    val+=studentArr[i];
}

let avg = val/100;
console.log(avg);

val = 0;
for(let i =0; i<studentArr.length; i++){
    studentArr[i]=studentArr[i]+7;
    val+= studentArr[i];
}


avg = val/100;
console.log(avg);
