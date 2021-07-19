'use strict';
let nums = [1,2,3,4,5,6,7,8,9,10];
const sum = (num1, num2) => {
  return num1 + num2;
}

const sumAll = (x, ...xs) => {
  if(!x) return 0;
  if(!xs) return x;
  return sum(x, sumAll(...xs))
}

console.log(sumAll(...nums))