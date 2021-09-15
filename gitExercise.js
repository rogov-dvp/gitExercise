let arrInt = [1,5,2,12,3,32,52,14,23,1,9];

feature2(arrInt);

//functions:
function feature2(arr) {
  let sum = 0;
  for(num in arr) {
    sum += num;
  }
  console.log(`The sum is ${sum}. The average is ${sum/arr.size}`)
}
