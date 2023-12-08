const printArray = function(array) {
  ￼ ​​​​  for (var i = 0; i < array.length; i++){￼ ​​​​    console.log(array[i]);
       }￼
    ​​};￼
  ​​​​printArray([1, 2, 3, 4, 5]);​​

// functional programming as below
const forEach = function(array, action){￼ ​​​​  
  for (var i = 0; i < array.length; i++){￼ ​​​​    action(array[i]);￼ ​​​​  
      }￼
    ​​​​};​​

const logItem = function(item) {￼ ​​​​  
  console.log(item);￼
    ​​​​};​​

forEach([1, 2, 3, 4, 5], logItem);​​
