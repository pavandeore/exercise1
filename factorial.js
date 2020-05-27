// program to calculate the factorial of number using javascript

const factorialNum = number =>{
  // lets build actual logic
  let fact=1;
  for(let i=1; i<=number; i++){
    fact *=i;
  }
  return fact;
}

console.log(factorialNum(3))
console.log(factorialNum(5))
console.log(factorialNum(10))

// Sucess 
