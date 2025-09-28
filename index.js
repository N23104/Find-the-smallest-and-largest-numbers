let numbers =[5,8,2,10,3,7];

let minimum = numbers [0];
let maximum = numbers [0];

for(let i = 1; i <numbers.length; i++) {
if( numbers[i] <minimum){
minimum = numbers[i];
}
  if ( numbers[i] > maximum){
    maximum = numbers[i];
  }

}

console.log("minimum number :"  + minimum);
console.log("maximum number :"   + maximum);


