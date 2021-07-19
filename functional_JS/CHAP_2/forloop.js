'use strict'

let nums = [1,2,3,4,5,6,7,8,9,10];

const sumAll = (arr) => {
  if(!arr) return 0; // handle error case
  let sum = 0;
  for(let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

console.log(sumAll(nums));