'use strict';
let nums = [1,2,3,4,5,6,7,8,9,10];

const sum = (num1, num2) => {
  return num1+num2;
}

const sumAll = (arr) => {
  /* patter matching */
  if(!arr) return 0;
  if(arr.length === 1) return x[0];
  if(arr.length === 2) return sum(...arr);
  let i = 0;
  let total = 0;
  while(i < arr.length) {
    total += arr[i];
    i += 1;
  }
  return total;
}

console.log(sumAll(nums));