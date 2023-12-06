// compair the implementation of storeNumber and doYouHaveThisNumber functions in a API 
// with array vs object data structure

// array data structure: use .push() and .includes() methods.
// but .includes() iterates through the whole array

// retrieving a value from an object is much faster than iterating through an array

const receivedNumbers = {};

const storeNumber = num => receivedNumbers[num] = true;

const doYouHaveThisNumber = num => receivedNumbers[num] === true;

storeNumber(4.52);
storeNumber('chicken');

console.log(doYouHaveThisNumber('chicken'),doYouHaveThisNumber(4.52));
console.log(receivedNumbers)

// In both cases, the public API of the code, meaning the parts of the code that we want the end-user to interact with, 
// remained the same: 
// we had two functions, storeNumber() and doYouHaveThisNumber(). 
// The underlying implementation, or the way the functionality was actually achieved, is what altered.

/* 

API is an acronym for application programming interface. 
An API allows end-users to access properties and methods of data structures easily and 
without needing to do the “behind the scenes” work./*

*/

/* create a new data structure or an API or a class
  Stack */

class Stack {
  constructor() {
    this._array = [];
  }

  push(newValue) {
    this._array.push(newValue);
  }

  pop() {
    return this._array.pop();
  }
}

/* even though we put underscore before array as _array indicating 
  the interaction should be limited with the underlying array
  But users can still break the intended behavior of the Stack class 

  */

const stack = new Stack();
stack._array.unshift('value');
