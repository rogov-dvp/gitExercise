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
  console.log('concatString',concatString);
  return concatString;
}

module.exports = feature1;