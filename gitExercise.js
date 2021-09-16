let arrInt = [1,5,2,12,3,32,52,14,23,1,9];

feature2(arrInt);

//functions:
function feature2(arr) {
  let sum = 0;
  arr.forEach(num => {
    sum += num;
  }); 
  console.log(`The sum is ${sum}`);
  return sum;
}
module.exports = feature2;
let arrStr = ["hello", "abc", "acb", "abc", "bling"];

feature1(arrStr);

//functions:
function feature1(arr) {
  let concatString = ""; 
  arr.sort();
  arr.forEach(str => {
    concatString = concatString.concat(str+" ");
  });
  concatString = concatString.trim();
  return concatString;
}

module.exports = feature1;
