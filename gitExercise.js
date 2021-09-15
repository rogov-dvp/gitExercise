let arrStr = ["hello", "abc", "acb", "abc", "bling"];

feature1(arrStr);

//functions:
function feature1(arr) {
  arr.sort();
  console.log("the following are printed in descending order");
  for(str in arr) {
    console.log(str);
  }
}