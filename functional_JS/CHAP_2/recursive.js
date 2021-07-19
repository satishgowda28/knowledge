'use strict';
let nums = [1,2,3,4,5,6,7,8,9,10];
const sum = (num1, num2) => {
  return num1 + num2;
}

const sumAll = (arr) => {
  if(!arr.length) return 0;
  if(arr.length === 1) return arr[0];
  if(arr.length === 2) return sum(...arr);

  return sum(arr[0], sumAll(arr.slice(1)));
}

console.log(sumAll(nums));